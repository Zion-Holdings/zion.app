import React from 'react';
import Head from 'next/head';
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