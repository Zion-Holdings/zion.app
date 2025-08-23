import React from 'react';
import Layout from '../components/layout/Layout';
import { Bot, Sparkles, Zap, Target, Shield, Clock, CheckCircle, Cpu, Database, Network, Brain, Arm, Eye } from 'lucide-react';

export default function AIRobotics2041() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-orange-500/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full text-orange-300 text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                Revolutionary 2041 Technology
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
                  AI Robotics
                </span>
                <br />
                <span className="text-white">2041</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Experience the future of autonomous intelligence with AI systems that power robots 
                with human-like perception, learning, and decision-making capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                  Build Robots
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
                Discover the cutting-edge capabilities that make AI Robotics 2041 the most 
                advanced autonomous intelligence platform ever created.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "Cognitive Robotics",
                  description: "AI-powered robots that understand context, learn from experience, and make intelligent decisions.",
                  color: "from-orange-500 to-red-500"
                },
                {
                  icon: <Eye className="w-8 h-8" />,
                  title: "Advanced Perception",
                  description: "Multi-modal sensors and AI vision systems that provide human-like environmental understanding.",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Arm className="w-8 h-8" />,
                  title: "Precision Control",
                  description: "AI-optimized motor control and manipulation for precise and delicate robotic operations.",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Adaptive Learning",
                  description: "Robots that continuously learn and improve their performance through AI-powered adaptation.",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Safety Intelligence",
                  description: "AI systems that ensure robotic safety through predictive risk assessment and prevention.",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Network className="w-8 h-8" />,
                  title: "Collaborative Robotics",
                  description: "Intelligent robots that work safely alongside humans in collaborative environments.",
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

        {/* Robotics Capabilities */}
        <section className="py-20 px-4 bg-gradient-to-r from-orange-500/5 to-red-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Robotics Capabilities
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive robotics solutions that cover every aspect of autonomous technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Autonomous Navigation", description: "AI-powered navigation and path planning for robots" },
                { name: "Computer Vision", description: "Advanced visual perception and object recognition" },
                { name: "Natural Language", description: "Human-robot communication and interaction" },
                { name: "Manipulation", description: "Precise robotic arm and hand control" },
                { name: "Learning Systems", description: "Continuous learning and skill improvement" },
                { name: "Safety Systems", description: "Intelligent safety monitoring and prevention" },
                { name: "Multi-robot Coordination", description: "Coordinated operation of multiple robots" },
                { name: "Human-Robot Interaction", description: "Safe and intuitive human-robot collaboration" }
              ].map((capability, index) => (
                <div key={index} className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-orange-500/30 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">{capability.name}</h3>
                  <p className="text-gray-400 text-sm">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Robotics Process */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI Robotics Process
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Understand how our AI systems power intelligent robotics for autonomous operation.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  phase: "Environmental Perception",
                  description: "AI systems process sensor data to understand the robot's environment",
                  features: ["Sensor fusion", "Object recognition", "Spatial mapping"]
                },
                {
                  phase: "Task Planning",
                  description: "Intelligent planning and decision-making for robotic tasks",
                  features: ["Goal setting", "Path planning", "Task decomposition"]
                },
                {
                  phase: "Execution Control",
                  description: "AI-powered control of robotic movements and actions",
                  features: ["Motor control", "Precision execution", "Adaptive control"]
                },
                {
                  phase: "Learning & Adaptation",
                  description: "Continuous learning from experience to improve performance",
                  features: ["Performance analysis", "Skill improvement", "Adaptive behavior"]
                },
                {
                  phase: "Safety Monitoring",
                  description: "Real-time safety monitoring and risk prevention",
                  features: ["Risk assessment", "Safety protocols", "Emergency response"]
                }
              ].map((phase, index) => (
                <div key={index} className="flex flex-col lg:flex-row items-center gap-8 p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl">
                  <div className="lg:w-1/3 text-center lg:text-left">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-white text-2xl font-bold mb-4">
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

        {/* Robotics Applications */}
        <section className="py-20 px-4 bg-gradient-to-r from-orange-500/5 to-red-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Robotics Applications
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Specialized robotics solutions designed for specific industries and use cases.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  category: "Manufacturing",
                  description: "Intelligent robots for automated manufacturing and assembly operations.",
                  applications: ["Assembly automation", "Quality inspection", "Material handling", "Welding", "Painting"]
                },
                {
                  category: "Healthcare",
                  description: "Medical robots for surgery, rehabilitation, and patient care assistance.",
                  applications: ["Surgical assistance", "Rehabilitation", "Patient monitoring", "Medication delivery", "Lab automation"]
                },
                {
                  category: "Logistics",
                  description: "Autonomous robots for warehouse operations and logistics management.",
                  applications: ["Warehouse automation", "Order picking", "Inventory management", "Sorting", "Transportation"]
                },
                {
                  category: "Agricultural Robots",
                  description: "Specialized robots for farming, harvesting, and crop management.",
                  types: ["Harvesting robots", "Weeding robots", "Monitoring robots", "Irrigation robots"]
                },
                {
                  category: "Service Robots",
                  description: "Service robots for customer service, cleaning, and assistance.",
                  applications: ["Customer service", "Cleaning", "Security", "Hospitality", "Retail"]
                },
                {
                  category: "Research",
                  description: "Research robots for scientific exploration and discovery.",
                  applications: ["Space exploration", "Underwater research", "Disaster response", "Environmental monitoring", "Scientific research"]
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
                Industry Transformations
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover how AI Robotics 2041 transforms industries across the globe.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  industry: "Manufacturing",
                  description: "Intelligent robots revolutionize manufacturing with precision, efficiency, and flexibility.",
                  benefits: ["Increased productivity", "Quality improvement", "Cost reduction"]
                },
                {
                  industry: "Healthcare",
                  description: "Medical robots enhance surgical precision and patient care with AI-powered assistance.",
                  benefits: ["Better outcomes", "Reduced errors", "Faster recovery"]
                },
                {
                  industry: "Logistics",
                  description: "Autonomous robots optimize warehouse operations and supply chain management.",
                  benefits: ["Faster operations", "Reduced costs", "24/7 availability"]
                },
                {
                  industry: "Agriculture",
                  description: "Agricultural robots enable precision farming and sustainable agriculture practices.",
                  benefits: ["Higher yields", "Resource efficiency", "Sustainability"]
                },
                {
                  industry: "Retail",
                  description: "Service robots enhance customer experience and operational efficiency in retail.",
                  benefits: ["Better service", "Operational efficiency", "Cost savings"]
                },
                {
                  industry: "Construction",
                  description: "Construction robots improve safety and efficiency in building and infrastructure projects.",
                  benefits: ["Safety improvement", "Faster construction", "Quality enhancement"]
                }
              ].map((industry, index) => (
                <div key={index} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-orange-500/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-4">{industry.industry}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{industry.description}</p>
                  <div className="space-y-2">
                    {industry.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0" />
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
        <section className="py-20 px-4 bg-gradient-to-r from-orange-500/5 to-red-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transform Your Business
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover the incredible benefits of implementing AI Robotics 2041 in your organization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Increased Productivity",
                  description: "AI-powered robots work 24/7 with consistent quality and efficiency.",
                  icon: <Zap className="w-8 h-8" />,
                  color: "from-orange-500 to-red-500"
                },
                {
                  title: "Enhanced Safety",
                  description: "Robots handle dangerous tasks while maintaining human safety standards.",
                  icon: <Shield className="w-8 h-8" />,
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Cost Reduction",
                  description: "Automation reduces operational costs and improves resource utilization.",
                  icon: <Target className="w-8 h-8" />,
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: "Quality Improvement",
                  description: "AI-powered precision ensures consistent, high-quality outputs.",
                  icon: <Bot className="w-8 h-8" />,
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
              Ready to Build Robots?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Transform your business with AI-powered robotics that delivers 
              increased productivity, enhanced safety, and cost reduction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
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