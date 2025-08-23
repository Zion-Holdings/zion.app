import React from 'react';
import Layout from '../components/layout/Layout';
import { Network, Sparkles, Zap, Target, Cpu, Clock, CheckCircle, Wifi, Sensor, Cloud } from 'lucide-react';

export default function AIInternetOfThings2041() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-500/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 rounded-full text-orange-300 text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                Revolutionary 2041 Technology
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                  AI Internet of Things
                </span>
                <br />
                <span className="text-white">2041</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Experience the future of connected intelligence with AI systems that orchestrate, 
                analyze, and optimize IoT networks with unprecedented intelligence and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105">
                  Connect Everything
                </button>
                <button className="px-8 py-4 border-2 border-orange-400 text-orange-400 font-semibold rounded-xl hover:bg-orange-400 hover:text-black transition-all duration-300">
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
                  icon: <Network className="w-8 h-8" />,
                  title: "Intelligent Networking",
                  description: "AI-powered network orchestration that optimizes connectivity and data flow automatically.",
                  color: "from-orange-500 to-amber-500"
                },
                {
                  icon: <Sensor className="w-8 h-8" />,
                  title: "Smart Sensors",
                  description: "Advanced sensors with embedded AI that process data locally and make intelligent decisions.",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Cloud className="w-8 h-8" />,
                  title: "Edge Computing",
                  description: "Distributed AI processing at the edge for real-time decision making and reduced latency.",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "Predictive Analytics",
                  description: "AI systems that predict device failures, optimize performance, and prevent issues.",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Real-time Optimization",
                  description: "Instant optimization of IoT networks and devices for maximum efficiency and performance.",
                  color: "from-red-500 to-pink-500"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Autonomous Management",
                  description: "Self-managing IoT systems that configure, monitor, and optimize themselves automatically.",
                  color: "from-indigo-500 to-purple-500"
                }
              ].map((feature, index) => (
                <div key={index} className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105">
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
        <section className="py-20 px-4 bg-gradient-to-r from-orange-500/5 to-amber-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                IoT Capabilities
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive IoT solutions that cover every aspect of connected intelligence and automation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Device Management", description: "Centralized management of IoT devices and networks" },
                { name: "Data Collection", description: "Intelligent data gathering from sensors and devices" },
                { name: "Real-time Monitoring", description: "Continuous monitoring and alerting systems" },
                { name: "Predictive Maintenance", description: "AI-powered maintenance prediction and optimization" },
                { name: "Energy Optimization", description: "Smart energy management and optimization" },
                { name: "Security & Privacy", description: "Advanced IoT security and data protection" },
                { name: "Scalability", description: "Easily scalable IoT solutions for growth" },
                { name: "Integration", description: "Seamless integration with existing systems" }
              ].map((capability, index) => (
                <div key={index} className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-orange-500/30 transition-all duration-300">
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
                Understand how our AI systems orchestrate and optimize IoT networks for maximum intelligence and efficiency.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  phase: "Device Discovery",
                  description: "AI automatically discovers and registers IoT devices across the network",
                  features: ["Device detection", "Auto-registration", "Capability mapping"]
                },
                {
                  phase: "Data Collection",
                  description: "Intelligent data gathering and processing from all connected devices and sensors",
                  features: ["Sensor data", "Device metrics", "Performance data"]
                },
                {
                  phase: "AI Analysis",
                  description: "Advanced AI algorithms analyze data patterns and generate insights",
                  features: ["Pattern recognition", "Anomaly detection", "Predictive modeling"]
                },
                {
                  phase: "Intelligent Optimization",
                  description: "AI-driven optimization of network performance and device operations",
                  features: ["Network optimization", "Device optimization", "Energy management"]
                },
                {
                  phase: "Autonomous Actions",
                  description: "Self-executing actions based on AI insights and predictions",
                  features: ["Automated responses", "Predictive actions", "Self-healing"]
                }
              ].map((phase, index) => (
                <div key={index} className="flex flex-col lg:flex-row items-center gap-8 p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl">
                  <div className="lg:w-1/3 text-center lg:text-left">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full text-white text-2xl font-bold mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-3">{phase.phase}</h3>
                    <p className="text-gray-400">{phase.description}</p>
                  </div>
                  <div className="lg:w-2/3">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {phase.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
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
        <section className="py-20 px-4 bg-gradient-to-r from-orange-500/5 to-amber-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                IoT Applications
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive IoT solutions for every industry and use case.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  category: "Smart Homes",
                  description: "Intelligent home automation and management systems for comfort and efficiency.",
                  applications: ["Climate control", "Security systems", "Energy management", "Entertainment"]
                },
                {
                  category: "Smart Cities",
                  description: "Urban infrastructure management and optimization for sustainable living.",
                  applications: ["Traffic management", "Public safety", "Environmental monitoring", "Utilities"]
                },
                {
                  category: "Industrial IoT",
                  description: "Manufacturing and industrial process optimization and monitoring.",
                  applications: ["Predictive maintenance", "Quality control", "Supply chain", "Safety monitoring"]
                },
                {
                  category: "Healthcare IoT",
                  description: "Patient monitoring and healthcare system optimization.",
                  applications: ["Patient monitoring", "Medical devices", "Hospital management", "Telemedicine"]
                },
                {
                  category: "Agricultural IoT",
                  description: "Smart farming and agricultural optimization systems.",
                  applications: ["Crop monitoring", "Irrigation control", "Livestock tracking", "Weather monitoring"]
                },
                {
                  category: "Transportation IoT",
                  description: "Intelligent transportation and logistics management.",
                  applications: ["Fleet management", "Traffic optimization", "Public transit", "Logistics"]
                }
              ].map((category, index) => (
                <div key={index} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-orange-500/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{category.description}</p>
                  <div className="space-y-2">
                    {category.applications.map((app, appIndex) => (
                      <div key={appIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0" />
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
                Industry Applications
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover how AI IoT 2041 transforms industries across the globe.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  industry: "Manufacturing",
                  description: "Smart factories with connected equipment and predictive maintenance systems.",
                  applications: ["Predictive maintenance", "Quality control", "Supply chain optimization"]
                },
                {
                  industry: "Energy",
                  description: "Smart grid management and renewable energy optimization with IoT.",
                  applications: ["Grid management", "Energy optimization", "Renewable integration"]
                },
                {
                  industry: "Healthcare",
                  description: "Connected medical devices and patient monitoring systems.",
                  applications: ["Patient monitoring", "Medical devices", "Hospital management"]
                },
                {
                  industry: "Retail",
                  description: "Smart retail environments with inventory and customer analytics.",
                  applications: ["Inventory management", "Customer analytics", "Store optimization"]
                },
                {
                  industry: "Transportation",
                  description: "Connected vehicles and intelligent transportation systems.",
                  applications: ["Vehicle connectivity", "Traffic management", "Fleet optimization"]
                },
                {
                  industry: "Agriculture",
                  description: "Precision agriculture with sensor networks and automated systems.",
                  applications: ["Crop monitoring", "Automated irrigation", "Weather prediction"]
                }
              ].map((industry, index) => (
                <div key={index} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-orange-500/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-4">{industry.industry}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{industry.description}</p>
                  <div className="space-y-2">
                    {industry.applications.map((app, appIndex) => (
                      <div key={appIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0" />
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
        <section className="py-20 px-4 bg-gradient-to-r from-orange-500/5 to-amber-500/5">
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
                  title: "Operational Efficiency",
                  description: "Optimize operations and reduce costs through intelligent automation and monitoring.",
                  icon: <Network className="w-8 h-8" />,
                  color: "from-orange-500 to-amber-500"
                },
                {
                  title: "Predictive Insights",
                  description: "Gain predictive capabilities that help prevent issues and optimize performance.",
                  icon: <Target className="w-8 h-8" />,
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Real-time Monitoring",
                  description: "Monitor and respond to events in real-time for maximum efficiency and safety.",
                  icon: <Clock className="w-8 h-8" />,
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: "Scalable Growth",
                  description: "Easily scale your IoT infrastructure as your business grows and evolves.",
                  icon: <Cloud className="w-8 h-8" />,
                  color: "from-purple-500 to-pink-500"
                }
              ].map((benefit, index) => (
                <div key={index} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-orange-500/30 transition-all duration-300">
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
              intelligent connectivity, predictive insights, and operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-orange-400 text-orange-400 font-semibold rounded-xl hover:bg-orange-400 hover:text-black transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}