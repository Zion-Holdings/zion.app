import React from 'react';
import Head from 'next/head';
<<<<<<< HEAD
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Button from '../components/ui/Button';
import { Rocket, Atom, Cpu, Eye, Sparkles, Zap, CheckCircle, ArrowRight, Satellite } from 'lucide-react';

export default function SpaceMiningAutomationPlatformPage() {
  const platformFeatures = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Autonomous Mining Operations',
      description: 'Fully automated space mining with AI-driven decision making',
      features: ['Remote operation', 'AI navigation', 'Resource detection', 'Automated extraction']
    },
    {
      icon: <Atom className="w-6 h-6" />,
      title: 'Quantum Resource Analysis',
      description: 'Advanced quantum computing for resource identification and optimization',
      features: ['Quantum sensing', 'Resource mapping', 'Composition analysis', 'Value assessment']
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'Intelligent Fleet Management',
      description: 'AI-powered coordination of mining fleets and logistics',
      features: ['Fleet optimization', 'Route planning', 'Resource allocation', 'Maintenance scheduling']
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Real-time Monitoring',
      description: 'Continuous surveillance and control of mining operations',
      features: ['Live video feeds', 'Sensor data', 'Performance metrics', 'Alert systems']
    }
  ];

  const miningTargets = [
    {
      target: 'Asteroids',
      resources: ['Precious metals', 'Rare earth elements', 'Water ice', 'Organic compounds']
    },
    {
      target: 'Lunar Surface',
      resources: ['Helium-3', 'Regolith', 'Water deposits', 'Mineral ores']
    },
    {
      target: 'Mars',
      resources: ['Iron oxide', 'Water ice', 'Carbon dioxide', 'Mineral deposits']
    },
    {
      target: 'Space Debris',
      resources: ['Recyclable materials', 'Rare metals', 'Electronic components', 'Fuel remnants']
    }
  ];

  const automationTechnologies = [
    'AI-Powered Navigation',
    'Quantum Computing',
    'Robotic Automation',
    'Machine Learning',
    'Computer Vision',
    'Predictive Analytics',
    'Autonomous Systems',
    'Edge Computing'
  ];

  const platformServices = [
    'Mining Platform Development',
    'Autonomous System Design',
    'Resource Detection Systems',
    'Fleet Management Software',
    'Safety & Compliance',
    'Performance Optimization',
    'Maintenance Automation',
    'Data Analytics'
  ];

  return (
    <UltraFuturisticBackground variant="quantum" intensity="high">
      <Head>
        <title>Space Mining Automation Platform | Zion Tech Group</title>
        <meta name="description" content="Revolutionary space mining automation platform with AI-driven operations, quantum resource analysis, and autonomous fleet management for extraterrestrial resource extraction." />
        <link rel="canonical" href="https://ziontechgroup.com/space-mining-automation-platform" />
      </Head>
      
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <header className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-pink-500 to-red-600 mb-6">
              <Rocket className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-400 via-red-500 to-orange-400 bg-clip-text text-transparent mb-6">
              Space Mining Automation Platform
            </h1>
            <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed">
              Pioneer the future of space resource extraction with our revolutionary automation platform. 
              AI-driven mining operations, quantum resource analysis, and autonomous fleet management for the next frontier.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" className="px-8 py-4">Launch Mission</Button>
              <Button href="/space-technology" variant="outline" className="px-8 py-4">Explore Space Tech</Button>
            </div>
          </header>

          {/* Platform Features */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Platform Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {platformFeatures.map((feature, index) => (
                <div key={index} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-pink-500/40 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-pink-500 to-red-600 flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-pink-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Mining Targets */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Mining Targets & Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {miningTargets.map((target, index) => (
                <div key={index} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-red-500/40 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-4 text-center">{target.target}</h3>
                  <ul className="space-y-2">
                    {target.resources.map((resource, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-center gap-2">
                        <ArrowRight className="w-3 h-3 text-red-400" />
                        {resource}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Automation Technologies */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Automation Technologies
            </h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {automationTechnologies.map((tech, index) => (
                  <div key={index} className="p-4 rounded-xl bg-black/40 border border-gray-700/60 hover:border-orange-500/40 transition-all duration-300 text-center">
                    <Zap className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-200">{tech}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Platform Services */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Platform Services
            </h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {platformServices.map((service, index) => (
                  <div key={index} className="p-4 rounded-xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 transition-all duration-300 text-center">
                    <Sparkles className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-200">{service}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Safety & Compliance */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Safety & Compliance
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Satellite className="w-5 h-5 text-pink-400" />
                    Space Safety
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Collision avoidance systems</li>
                    <li>• Emergency protocols</li>
                    <li>• Environmental protection</li>
                    <li>• Risk assessment</li>
                  </ul>
                </div>
                <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Rocket className="w-5 h-5 text-red-400" />
                    Regulatory Compliance
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• International space law</li>
                    <li>• Environmental regulations</li>
                    <li>• Safety standards</li>
                    <li>• Licensing requirements</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Implementation Process */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Implementation Process
            </h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {[
                  { step: '1', title: 'Planning', desc: 'Mission design and resource assessment' },
                  { step: '2', title: 'Development', desc: 'Platform and system development' },
                  { step: '3', title: 'Testing', desc: 'Earth-based testing and validation' },
                  { step: '4', title: 'Deployment', desc: 'Space deployment and activation' },
                  { step: '5', title: 'Operations', desc: 'Ongoing mining operations' }
                ].map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-pink-500 to-red-600 text-white font-bold mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-400">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-pink-900/20 to-red-900/20 border border-pink-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Mine the Stars?
              </h2>
              <p className="text-gray-300 mb-6">
                Join the space mining revolution. Our automation platform makes extraterrestrial 
                resource extraction safe, efficient, and profitable.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="/contact" className="px-8 py-4">Launch Mission</Button>
                <Button href="/space-technology" variant="outline" className="px-8 py-4">Learn More</Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </UltraFuturisticBackground>
  );
}
=======
import { Rocket, Zap, Shield, Globe, Cpu, Satellite, Atom, Target } from 'lucide-react';

const SpaceMiningAutomationPlatformPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Space Mining Automation Platform - Zion Tech Group</title>
        <meta name="description" content="Revolutionize space resource extraction with Zion Tech Group's automated space mining platform. AI-powered robotics, autonomous operations, and sustainable resource harvesting." />
        <meta name="keywords" content="space mining, asteroid mining, space automation, robotics, resource extraction, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/space-mining-automation-platform" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <Rocket className="mx-auto h-16 w-16 text-purple-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Space Mining Automation Platform
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pioneering the future of space resource extraction. Our automated platform 
              enables sustainable mining operations across the solar system.
            </p>
          </div>
        </section>

        {/* Platform Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Autonomous Space Resource Extraction
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our platform combines advanced robotics, artificial intelligence, and 
                sustainable practices to unlock the vast resources of space.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <Satellite className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Autonomous Operations</h3>
                <p className="text-gray-300">
                  AI-powered mining robots that operate independently in harsh 
                  space environments with minimal human intervention.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <Zap className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">High Efficiency</h3>
                <p className="text-gray-300">
                  Optimized extraction processes that maximize resource recovery 
                  while minimizing energy consumption and waste.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <Shield className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Sustainable Practices</h3>
                <p className="text-gray-300">
                  Environmentally conscious mining methods that preserve 
                  celestial bodies and promote responsible resource utilization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Technologies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Core Technologies
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Robotics</h3>
                  <p className="text-gray-300">
                    Advanced autonomous systems with machine learning capabilities for 
                    adaptive mining strategies and real-time decision making.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Resource Detection</h3>
                  <p className="text-gray-300">
                    Multi-spectral sensors and AI analysis for identifying valuable 
                    minerals, water ice, and other resources in space.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Extraction Systems</h3>
                  <p className="text-gray-300">
                    Innovative mining techniques including laser cutting, 
                    mechanical excavation, and chemical processing.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Processing & Refinement</h3>
                  <p className="text-gray-300">
                    On-site processing facilities that convert raw materials into 
                    usable resources and valuable commodities.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Transportation Network</h3>
                  <p className="text-gray-300">
                    Efficient logistics systems for moving resources between 
                    mining sites and processing facilities.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Safety & Monitoring</h3>
                  <p className="text-gray-300">
                    Comprehensive safety systems and real-time monitoring 
                    for all mining operations and equipment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Target Resources */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Target Resources
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <Atom className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Precious Metals</h3>
                <p className="text-gray-300">
                  Platinum, gold, iridium, and other rare metals from 
                  asteroids and lunar deposits.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <Target className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Water Ice</h3>
                <p className="text-gray-300">
                  Lunar and asteroid water for life support, fuel production, 
                  and agricultural purposes.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <Cpu className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Rare Earth Elements</h3>
                <p className="text-gray-300">
                  Critical elements for electronics, renewable energy, 
                  and advanced manufacturing.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <Globe className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Helium-3</h3>
                <p className="text-gray-300">
                  Lunar helium-3 for fusion power generation and 
                  advanced propulsion systems.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <Rocket className="h-12 w-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Construction Materials</h3>
                <p className="text-gray-300">
                  Regolith, metals, and other materials for building 
                  space habitats and infrastructure.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <Zap className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Energy Resources</h3>
                <p className="text-gray-300">
                  Solar energy collection, nuclear materials, and 
                  other power sources for space operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mining Locations */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Mining Locations & Operations
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Near-Earth Asteroids</h3>
                  <p className="text-gray-300">
                    Accessible asteroid mining operations for precious metals, 
                    water ice, and other valuable resources.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Lunar Surface</h3>
                  <p className="text-gray-300">
                    Lunar mining for helium-3, water ice, and construction 
                    materials for space infrastructure.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Mars & Moons</h3>
                  <p className="text-gray-300">
                    Future operations on Mars and its moons for water, 
                    minerals, and potential fuel production.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Deep Space</h3>
                  <p className="text-gray-300">
                    Long-range missions to outer solar system bodies 
                    for rare resources and scientific exploration.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Orbital Facilities</h3>
                  <p className="text-gray-300">
                    Space-based processing and manufacturing facilities 
                    for resource refinement and product creation.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">International Cooperation</h3>
                  <p className="text-gray-300">
                    Collaborative mining operations with international 
                    partners and space agencies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Safety & Sustainability */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
                Safety & Sustainability
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Environmental Protection</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li>• Minimal impact on celestial body surfaces</li>
                    <li>• Waste reduction and recycling systems</li>
                    <li>• Preservation of scientific value</li>
                    <li>• Sustainable resource management</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Operational Safety</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li>• Redundant safety systems</li>
                    <li>• Emergency response protocols</li>
                    <li>• Continuous monitoring and alerts</li>
                    <li>• Human oversight and intervention</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Economic Impact */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Economic & Strategic Impact
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
                <div className="bg-green-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-400">$</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Economic Growth</h3>
                <p className="text-gray-300 text-sm">Trillion-dollar industry potential with new markets and opportunities</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
                <div className="bg-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-400">🌍</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Resource Security</h3>
                <p className="text-gray-300 text-sm">Reduced dependency on Earth's limited resources</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
                <div className="bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-400">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Space Development</h3>
                <p className="text-gray-300 text-sm">Accelerated space exploration and colonization</p>
              </div>
            </div>
          </div>
        </section>

        {/* Get Involved */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join the Space Mining Revolution
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Be part of humanity's next great adventure. Whether you're an investor, 
              engineer, or space enthusiast, there are many ways to contribute.
            </p>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <Rocket className="mx-auto h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Participation Opportunities</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-white mb-2">For Investors</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Investment opportunities in mining operations</li>
                    <li>• Technology development funding</li>
                    <li>• Strategic partnerships</li>
                    <li>• Portfolio diversification</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">For Professionals</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Career opportunities in space mining</li>
                    <li>• Research and development positions</li>
                    <li>• Technical consulting roles</li>
                    <li>• Training and education programs</li>
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

export default SpaceMiningAutomationPlatformPage;
>>>>>>> origin/HEAD
