import React from 'react';
import Layout from '../components/layout/Layout';
import { Wifi, Sparkles, Zap, Target, Shield, Clock, CheckCircle, Cpu, Database, Network, Brain, Sensor } from 'lucide-react';

export default function AIIoT2041() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-teal-500/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30 rounded-full text-teal-300 text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                Revolutionary 2041 Technology
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  AI IoT
                </span>
                <br />
                <span className="text-white">2041</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Experience the future of connected intelligence with AI systems that optimize, 
                secure, and enhance IoT networks with unprecedented efficiency and automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                  Connect Everything
                </button>
                <button className="px-8 py-4 border-2 border-teal-400 text-teal-400 font-semibold rounded-xl hover:bg-teal-400 hover:text-black transition-all duration-300">
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
                Discover the cutting-edge capabilities that make AI IoT 2041 the most 
                advanced connected intelligence platform ever created.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "Cognitive IoT",
                  description: "AI-powered IoT devices that learn, adapt, and make intelligent decisions autonomously.",
                  color: "from-teal-500 to-cyan-500"
                },
                {
                  icon: <Network className="w-8 h-8" />,
                  title: "Intelligent Networking",
                  description: "AI-optimized network routing and bandwidth management for maximum IoT efficiency.",
                  color: "from-blue-500 to-indigo-500"
                },
                {
                  icon: <Sensor className="w-8 h-8" />,
                  title: "Smart Sensors",
                  description: "Advanced sensors with AI processing that provide real-time insights and predictions.",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "IoT Security",
                  description: "AI-enhanced security protocols that protect IoT networks from sophisticated threats.",
                  color: "from-red-500 to-pink-500"
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Real-time Processing",
                  description: "Instant data processing and analysis at the edge for immediate IoT response.",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Predictive Maintenance",
                  description: "AI systems that predict IoT device failures and optimize maintenance schedules.",
                  color: "from-purple-500 to-pink-500"
                }
              ].map((feature, index) => (
                <div key={index} className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-teal-500/50 transition-all duration-300 hover:transform hover:scale-105">
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

        {/* IoT Capabilities */}
        <section className="py-20 px-4 bg-gradient-to-r from-teal-500/5 to-cyan-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                IoT Capabilities
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive IoT solutions that cover every aspect of connected technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Device Management", description: "AI-powered IoT device provisioning and management" },
                { name: "Data Analytics", description: "Real-time IoT data processing and intelligent insights" },
                { name: "Edge Computing", description: "Local AI processing for faster IoT response times" },
                { name: "Cloud Integration", description: "Seamless cloud connectivity and data synchronization" },
                { name: "Security Monitoring", description: "Continuous IoT security monitoring and threat detection" },
                { name: "Automation", description: "Intelligent IoT workflow automation and optimization" },
                { name: "Scalability", description: "Enterprise-grade IoT solutions for massive deployments" },
                { name: "Interoperability", description: "Multi-protocol support and device compatibility" }
              ].map((capability, index) => (
                <div key={index} className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-teal-500/30 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">{capability.name}</h3>
                  <p className="text-gray-400 text-sm">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IoT Process */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI IoT Process
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Understand how our AI systems optimize and enhance IoT networks for maximum performance.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  phase: "Device Discovery",
                  description: "AI automatically discovers and identifies IoT devices on the network",
                  features: ["Auto-discovery", "Device identification", "Network mapping"]
                },
                {
                  phase: "Data Collection",
                  description: "Intelligent data gathering from IoT sensors and devices",
                  features: ["Sensor data", "Device metrics", "Performance data"]
                },
                {
                  phase: "AI Analysis",
                  description: "Real-time AI processing of IoT data for insights and optimization",
                  features: ["Pattern recognition", "Anomaly detection", "Predictive analytics"]
                },
                {
                  phase: "Intelligent Response",
                  description: "AI-powered automation and response to IoT events and conditions",
                  features: ["Automated actions", "Smart responses", "Optimization"]
                },
                {
                  phase: "Continuous Learning",
                  description: "AI systems that learn and improve IoT performance over time",
                  features: ["Performance optimization", "Efficiency improvement", "Adaptive learning"]
                }
              ].map((phase, index) => (
                <div key={index} className="flex flex-col lg:flex-row items-center gap-8 p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl">
                  <div className="lg:w-1/3 text-center lg:text-left">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full text-white text-2xl font-bold mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-3">{phase.phase}</h3>
                    <p className="text-gray-400">{phase.description}</p>
                  </div>
                  <div className="lg:w-2/3">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {phase.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0" />
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

        {/* IoT Applications */}
        <section className="py-20 px-4 bg-gradient-to-r from-teal-500/5 to-cyan-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                IoT Applications
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Specialized IoT solutions designed for specific industries and use cases.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  category: "Smart Cities",
                  description: "Intelligent urban infrastructure with IoT sensors and AI optimization.",
                  applications: ["Traffic management", "Energy optimization", "Waste management", "Public safety", "Environmental monitoring"]
                },
                {
                  category: "Industrial IoT",
                  description: "Manufacturing and industrial automation with AI-powered IoT systems.",
                  applications: ["Predictive maintenance", "Quality control", "Supply chain", "Energy management", "Safety monitoring"]
                },
                {
                  category: "Smart Homes",
                  description: "Intelligent home automation and energy management with IoT.",
                  applications: ["Climate control", "Security systems", "Energy management", "Entertainment", "Appliance control"]
                },
                {
                  category: "Healthcare IoT",
                  description: "Medical device monitoring and patient care with intelligent IoT.",
                  applications: ["Patient monitoring", "Medical devices", "Health tracking", "Medication management", "Emergency response"]
                },
                {
                  category: "Transportation",
                  description: "Connected vehicles and intelligent transportation systems.",
                  applications: ["Vehicle tracking", "Traffic optimization", "Fleet management", "Predictive maintenance", "Safety systems"]
                },
                {
                  category: "Agriculture",
                  description: "Smart farming with IoT sensors and AI-powered insights.",
                  applications: ["Soil monitoring", "Crop management", "Irrigation control", "Weather tracking", "Equipment monitoring"]
                }
              ].map((category, index) => (
                <div key={index} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-teal-500/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{category.description}</p>
                  <div className="space-y-2">
                    {category.applications.map((app, appIndex) => (
                      <div key={appIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Applications */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industry Transformations
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover how AI IoT 2041 transforms industries across the globe.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  industry: "Manufacturing",
                  description: "Smart factories with IoT sensors and AI-powered optimization for maximum efficiency.",
                  benefits: ["Increased productivity", "Reduced downtime", "Quality improvement"]
                },
                {
                  industry: "Energy",
                  description: "Smart grids and renewable energy systems with intelligent IoT management.",
                  benefits: ["Energy efficiency", "Cost reduction", "Sustainability"]
                },
                {
                  industry: "Retail",
                  description: "Connected retail experiences with IoT sensors and AI-powered insights.",
                  benefits: ["Customer experience", "Inventory optimization", "Operational efficiency"]
                },
                {
                  industry: "Healthcare",
                  description: "Connected healthcare with IoT devices and AI-powered patient monitoring.",
                  benefits: ["Patient outcomes", "Operational efficiency", "Cost reduction"]
                },
                {
                  industry: "Transportation",
                  description: "Intelligent transportation systems with IoT sensors and AI optimization.",
                  benefits: ["Traffic optimization", "Safety improvement", "Efficiency gains"]
                },
                {
                  industry: "Agriculture",
                  description: "Precision agriculture with IoT sensors and AI-powered farming insights.",
                  benefits: ["Crop yield", "Resource optimization", "Sustainability"]
                }
              ].map((industry, index) => (
                <div key={index} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-teal-500/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-4">{industry.industry}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{industry.description}</p>
                  <div className="space-y-2">
                    {industry.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 bg-gradient-to-r from-teal-500/5 to-cyan-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transform Your Business
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover the incredible benefits of implementing AI IoT 2041 in your organization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Increased Efficiency",
                  description: "AI-powered IoT optimization that dramatically improves operational efficiency and productivity.",
                  icon: <Zap className="w-8 h-8" />,
                  color: "from-teal-500 to-cyan-500"
                },
                {
                  title: "Cost Reduction",
                  description: "Intelligent IoT management that reduces operational costs and resource consumption.",
                  icon: <Target className="w-8 h-8" />,
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: "Real-time Insights",
                  description: "Instant IoT data analysis and insights for better decision-making and optimization.",
                  icon: <Brain className="w-8 h-8" />,
                  color: "from-blue-500 to-indigo-500"
                },
                {
                  title: "Predictive Capabilities",
                  description: "AI-powered predictions that prevent issues and optimize IoT performance proactively.",
                  icon: <Sensor className="w-8 h-8" />,
                  color: "from-purple-500 to-pink-500"
                }
              ].map((benefit, index) => (
                <div key={index} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-teal-500/30 transition-all duration-300">
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
              Ready to Connect Everything?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Transform your business with AI-powered IoT that delivers 
              increased efficiency, cost reduction, and intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-teal-400 text-teal-400 font-semibold rounded-xl hover:bg-teal-400 hover:text-black transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}