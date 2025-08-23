import React from 'react';
import Head from 'next/head';
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