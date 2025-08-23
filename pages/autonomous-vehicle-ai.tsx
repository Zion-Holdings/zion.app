import React from 'react';
import Head from 'next/head';
import { Car, Brain, Shield, Map, Zap, Users, Globe, Cpu } from 'lucide-react';

const AutonomousVehicleAIPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Autonomous Vehicle AI - Zion Tech Group</title>
        <meta name="description" content="Revolutionize transportation with Zion Tech Group's autonomous vehicle AI platform. Advanced perception, decision-making, and safety systems for self-driving vehicles." />
        <meta name="keywords" content="autonomous vehicles, self-driving cars, vehicle AI, transportation AI, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/autonomous-vehicle-ai" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <Car className="mx-auto h-16 w-16 text-orange-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Autonomous Vehicle AI
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The future of transportation is autonomous. Our AI platform enables 
              safe, efficient, and intelligent self-driving vehicles.
            </p>
          </div>
        </section>

        {/* Platform Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Intelligent Transportation Systems
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our autonomous vehicle AI platform combines advanced perception, 
                decision-making, and safety systems for next-generation transportation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <Brain className="h-12 w-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Advanced Perception</h3>
                <p className="text-gray-300">
                  Multi-sensor fusion and AI-powered object detection 
                  for comprehensive environmental understanding.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <Shield className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Safety First</h3>
                <p className="text-gray-300">
                  Redundant safety systems and fail-safe mechanisms 
                  ensuring passenger and pedestrian safety.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <Zap className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Real-time Decision Making</h3>
                <p className="text-gray-300">
                  Instantaneous AI decision-making for complex 
                  traffic scenarios and emergency situations.
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
                  <h3 className="text-xl font-semibold text-white mb-3">Sensor Fusion</h3>
                  <p className="text-gray-300">
                    Integration of cameras, LiDAR, radar, and ultrasonic sensors 
                    for comprehensive environmental perception.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Computer Vision</h3>
                  <p className="text-gray-300">
                    Advanced image processing and object recognition 
                    for traffic signs, pedestrians, and other vehicles.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Path Planning</h3>
                  <p className="text-gray-300">
                    Intelligent route planning and trajectory optimization 
                    for safe and efficient navigation.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Machine Learning</h3>
                  <p className="text-gray-300">
                    Deep learning models for pattern recognition, 
                    behavior prediction, and decision optimization.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">V2X Communication</h3>
                  <p className="text-gray-300">
                    Vehicle-to-everything communication for enhanced 
                    safety and traffic coordination.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Edge Computing</h3>
                  <p className="text-gray-300">
                    On-board processing for real-time decision making 
                    and minimal latency response.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vehicle Types */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Vehicle Applications
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-3">Passenger Vehicles</h3>
                <p className="text-gray-300">
                  Self-driving cars and SUVs for personal transportation 
                  with advanced safety and comfort features.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-3">Commercial Trucks</h3>
                <p className="text-gray-300">
                  Autonomous freight transportation with optimized 
                  routing and fuel efficiency.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-3">Public Transit</h3>
                <p className="text-gray-300">
                  Self-driving buses and shuttles for efficient 
                  public transportation systems.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-3">Delivery Vehicles</h3>
                <p className="text-gray-300">
                  Autonomous delivery robots and vehicles for 
                  last-mile logistics and e-commerce.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-3">Agricultural Equipment</h3>
                <p className="text-gray-300">
                  Self-driving tractors and harvesters for 
                  precision agriculture and farming automation.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-3">Mining & Construction</h3>
                <p className="text-gray-300">
                  Autonomous heavy equipment for dangerous 
                  and repetitive industrial operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Safety & Reliability
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Redundant Systems</h3>
                  <p className="text-gray-300">
                    Multiple backup systems and fail-safe mechanisms 
                    ensuring continuous operation and safety.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Emergency Response</h3>
                  <p className="text-gray-300">
                    Instantaneous emergency braking and collision 
                    avoidance systems for maximum safety.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Human Oversight</h3>
                  <p className="text-gray-300">
                    Continuous monitoring and human intervention 
                    capabilities for complex scenarios.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Predictive Analytics</h3>
                  <p className="text-gray-300">
                    AI-powered risk assessment and predictive 
                    modeling for proactive safety measures.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Cybersecurity</h3>
                  <p className="text-gray-300">
                    Advanced security protocols protecting against 
                    cyber threats and unauthorized access.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Compliance & Standards</h3>
                  <p className="text-gray-300">
                    Adherence to international safety standards 
                    and regulatory requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure Requirements */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Infrastructure & Support
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
                <Map className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">HD Mapping</h3>
                <p className="text-gray-300 text-sm">High-definition maps for precise navigation</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
                <Globe className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">5G Networks</h3>
                <p className="text-gray-300 text-sm">High-speed connectivity for real-time data</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
                <Cpu className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Edge Computing</h3>
                <p className="text-gray-300 text-sm">Local processing for minimal latency</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
                <Users className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Fleet Management</h3>
                <p className="text-gray-300 text-sm">Centralized control and monitoring</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Benefits & Impact
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Safety Improvements</h3>
                  <p className="text-gray-300">
                    Reduce traffic accidents by up to 90% with 
                    AI-powered collision avoidance and safety systems.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Traffic Optimization</h3>
                  <p className="text-gray-300">
                    Intelligent routing and traffic management 
                    reducing congestion and travel times.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Environmental Impact</h3>
                  <p className="text-gray-300">
                    Optimized driving patterns and reduced 
                    emissions through efficient navigation.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Accessibility</h3>
                  <p className="text-gray-300">
                    Transportation access for elderly, disabled, 
                    and mobility-challenged individuals.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Economic Benefits</h3>
                  <p className="text-gray-300">
                    Reduced transportation costs and increased 
                    productivity through autonomous mobility.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Urban Planning</h3>
                  <p className="text-gray-300">
                    Reduced parking requirements and optimized 
                    urban infrastructure for autonomous vehicles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
                Implementation & Deployment
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Development Phases</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li>• Research and development</li>
                    <li>• Testing and validation</li>
                    <li>• Pilot programs</li>
                    <li>• Gradual deployment</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Support Services</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li>• Technical consultation</li>
                    <li>• System integration</li>
                    <li>• Training and support</li>
                    <li>• Ongoing maintenance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get Started */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join the Autonomous Revolution
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Ready to transform transportation with autonomous vehicle technology? 
              Our platform will help you build the future of mobility.
            </p>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <Car className="mx-auto h-12 w-12 text-orange-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Next Steps</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-white mb-2">For Manufacturers</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Technology integration</li>
                    <li>• Safety certification</li>
                    <li>• Production scaling</li>
                    <li>• Market deployment</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">For Fleet Operators</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Fleet assessment</li>
                    <li>• Pilot programs</li>
                    <li>• Training programs</li>
                    <li>• Operational support</li>
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

export default AutonomousVehicleAIPage;