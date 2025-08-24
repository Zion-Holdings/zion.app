import React from 'react';
import Layout from '../components/layout/Layout';
import { Zap, Sparkles, Target, Clock, CheckCircle, Brain, Settings, Cpu, Workflow, Rocket } from 'lucide-react';

export default function AIAutomation2041() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-yellow-500/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full text-yellow-300 text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                Revolutionary 2041 Technology
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  AI Automation
                </span>
                <br />
                <span className="text-white">2041</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Experience the future of automation with AI systems that learn, adapt, and 
                execute complex tasks with human-like intelligence and precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold rounded-xl hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                  Automate Everything
                </button>
                <button className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300">
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
                Discover the cutting-edge capabilities that make AI Automation 2041 the most 
                intelligent automation platform ever created.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "Cognitive Automation",
                  description: "AI systems that understand context, make decisions, and learn from experience to automate complex cognitive tasks.",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: <Workflow className="w-8 h-8" />,
                  title: "Intelligent Workflows",
                  description: "Self-optimizing workflows that automatically adjust and improve based on performance data and outcomes.",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Cpu className="w-8 h-8" />,
                  title: "Process Intelligence",
                  description: "Deep understanding of business processes that enables intelligent automation of end-to-end operations.",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Adaptive Learning",
                  description: "Continuous learning systems that improve automation accuracy and efficiency over time.",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Real-time Execution",
                  description: "Instant automation execution with real-time monitoring and adaptive response to changing conditions.",
                  color: "from-red-500 to-pink-500"
                },
                {
                  icon: <Settings className="w-8 h-8" />,
                  title: "Self-Configuration",
                  description: "AI systems that automatically configure and optimize themselves for maximum performance and efficiency.",
                  color: "from-indigo-500 to-purple-500"
                }
              ].map((feature, index) => (
                <div key={index} className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105">
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

        {/* Automation Types */}
        <section className="py-20 px-4 bg-gradient-to-r from-yellow-500/5 to-orange-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Types of Automation
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive automation solutions that cover every aspect of your business operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "RPA Automation", description: "Robotic process automation for repetitive tasks" },
                { name: "Cognitive Automation", description: "AI-powered decision making and problem solving" },
                { name: "Process Automation", description: "End-to-end business process automation" },
                { name: "Data Automation", description: "Automated data processing and analysis" },
                { name: "Customer Service", description: "AI-powered customer support automation" },
                { name: "Marketing Automation", description: "Intelligent marketing campaign automation" },
                { name: "Sales Automation", description: "Automated sales processes and lead management" },
                { name: "HR Automation", description: "Human resources process automation" }
              ].map((type, index) => (
                <div key={index} className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-yellow-500/30 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">{type.name}</h3>
                  <p className="text-gray-400 text-sm">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Automation Process */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI Automation Process
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Understand how our AI systems transform manual processes into intelligent, automated workflows.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  phase: "Process Analysis",
                  description: "AI analyzes existing processes to identify automation opportunities and optimization potential",
                  features: ["Process mapping", "Efficiency analysis", "Automation potential"]
                },
                {
                  phase: "AI Design",
                  description: "Intelligent design of automation workflows that optimize for efficiency and outcomes",
                  features: ["Workflow design", "Logic optimization", "Integration planning"]
                },
                {
                  phase: "Implementation",
                  description: "Seamless deployment of automation solutions with minimal disruption to operations",
                  features: ["Phased rollout", "Testing & validation", "User training"]
                },
                {
                  phase: "Monitoring",
                  description: "Continuous monitoring and optimization of automated processes for maximum performance",
                  features: ["Performance tracking", "Real-time alerts", "Continuous improvement"]
                },
                {
                  phase: "Optimization",
                  description: "AI-driven optimization that continuously improves automation efficiency and effectiveness",
                  features: ["Learning algorithms", "Performance tuning", "Adaptive optimization"]
                }
              ].map((phase, index) => (
                <div key={index} className="flex flex-col lg:flex-row items-center gap-8 p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl">
                  <div className="lg:w-1/3 text-center lg:text-left">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-white text-2xl font-bold mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-3">{phase.phase}</h3>
                    <p className="text-gray-400">{phase.description}</p>
                  </div>
                  <div className="lg:w-2/3">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {phase.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
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

        {/* Industry Applications */}
        <section className="py-20 px-4 bg-gradient-to-r from-yellow-500/5 to-orange-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover how AI Automation 2041 transforms industries across the globe.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  industry: "Manufacturing",
                  description: "Automate production lines, quality control, and supply chain management with AI-powered robotics and systems.",
                  applications: ["Production automation", "Quality control", "Supply chain optimization"]
                },
                {
                  industry: "Healthcare",
                  description: "Automate patient care, administrative processes, and medical diagnostics with intelligent AI systems.",
                  applications: ["Patient monitoring", "Administrative tasks", "Diagnostic assistance"]
                },
                {
                  industry: "Finance",
                  description: "Automate trading, risk assessment, and customer service with AI-powered financial automation.",
                  applications: ["Trading automation", "Risk management", "Customer service"]
                },
                {
                  industry: "Retail",
                  description: "Automate inventory management, customer service, and marketing with intelligent retail automation.",
                  applications: ["Inventory management", "Customer support", "Marketing campaigns"]
                },
                {
                  industry: "Transportation",
                  description: "Automate logistics, route optimization, and fleet management with AI transportation systems.",
                  applications: ["Logistics automation", "Route optimization", "Fleet management"]
                },
                {
                  industry: "Energy",
                  description: "Automate grid management, energy distribution, and maintenance with intelligent energy systems.",
                  applications: ["Grid automation", "Energy distribution", "Predictive maintenance"]
                }
              ].map((industry, index) => (
                <div key={index} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-yellow-500/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-4">{industry.industry}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{industry.description}</p>
                  <div className="space-y-2">
                    {industry.applications.map((app, appIndex) => (
                      <div key={appIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{app}</span>
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
                Transform Your Business
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover the incredible benefits of implementing AI Automation 2041 in your organization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Increased Efficiency",
                  description: "Automate repetitive tasks and optimize processes to achieve unprecedented levels of operational efficiency.",
                  icon: <Zap className="w-8 h-8" />,
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  title: "Cost Reduction",
                  description: "Reduce operational costs through automation while improving quality and consistency of outputs.",
                  icon: <Target className="w-8 h-8" />,
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: "24/7 Operation",
                  description: "Enable round-the-clock operations with AI systems that never sleep and maintain consistent performance.",
                  icon: <Clock className="w-8 h-8" />,
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Scalability",
                  description: "Scale operations instantly without proportional increases in human resources or infrastructure.",
                  icon: <Rocket className="w-8 h-8" />,
                  color: "from-purple-500 to-pink-500"
                }
              ].map((benefit, index) => (
                <div key={index} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-yellow-500/30 transition-all duration-300">
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
              Ready to Automate Everything?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Transform your business with AI-powered automation that delivers 
              unprecedented efficiency, cost savings, and operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold rounded-xl hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}