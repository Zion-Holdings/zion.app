import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { Atom, Brain, Zap, Beaker, Users, Globe, CheckCircle, ArrowRight, Eye, Target } from 'lucide-react';

const QuantumMaterialsDiscoveryPage: React.FC = () => {
  const discoveryFeatures = [
    {
      icon: Atom,
      title: 'Quantum Material Simulation',
      description: 'Advanced quantum algorithms for simulating material properties and behavior at atomic scales'
    },
    {
      icon: Brain,
      title: 'AI-Powered Discovery',
      description: 'Machine learning enhanced by quantum computing for accelerated material discovery'
    },
    {
      icon: Zap,
      title: 'High-Throughput Screening',
      description: 'Rapid screening of material candidates using quantum computational methods'
    },
    {
      icon: Beaker,
      title: 'Predictive Modeling',
      description: 'Quantum-powered predictive models for material performance and properties'
    }
  ];

  const discoveryCapabilities = [
    'Quantum molecular dynamics',
    'Electronic structure calculation',
    'Material property prediction',
    'Crystal structure analysis',
    'Phase diagram mapping',
    'Thermodynamic modeling',
    'Mechanical property simulation',
    'Optical property calculation'
  ];

  const applications = [
    'Battery technology',
    'Semiconductor materials',
    'Catalysts and catalysts',
    'Superconductors',
    'Quantum materials',
    'Energy storage',
    'Aerospace materials',
    'Biomedical materials'
  ];

  return (
    <Layout>
      <SEO
        title="Quantum Materials Discovery - Zion Tech Group"
        description="Revolutionary quantum-powered materials discovery platform for accelerated research and innovation"
        keywords={['quantum materials', 'materials discovery', 'quantum simulation', 'material science', 'quantum research']}
        image="https://ziontechgroup.com/og-quantum-materials-discovery.jpg"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-yellow-600/20 rounded-full">
                <Atom className="w-12 h-12 text-yellow-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Quantum
              <span className="text-yellow-400"> Materials Discovery</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Accelerate materials research with quantum-powered discovery technology. Unprecedented simulation capabilities, 
              AI-enhanced discovery, and revolutionary insights for next-generation materials.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded-lg transition-colors">
                Start Discovery
              </button>
              <button className="px-8 py-3 border border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 font-semibold rounded-lg transition-colors">
                Research Demo
              </button>
            </div>
          </div>
        </section>

        {/* Discovery Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Discovery Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Advanced quantum-powered materials discovery capabilities
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {discoveryFeatures.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <div className="flex items-start mb-6">
                    <div className="p-3 bg-yellow-600/20 rounded-lg mr-4">
                      <feature.icon className="w-8 h-8 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Discovery Capabilities */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Discovery Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive quantum materials research features
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {discoveryCapabilities.map((capability, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="mb-4">
                    <Target className="w-12 h-12 text-yellow-400 mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {capability}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transform industries with quantum materials discovery
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((application, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="mb-4">
                    <Beaker className="w-12 h-12 text-yellow-400 mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {application}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-2xl p-12 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Discover Quantum Materials?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join research institutions and companies that are already using quantum materials discovery 
                to accelerate innovation and create next-generation materials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded-lg transition-colors">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 font-semibold rounded-lg transition-colors">
                  Contact Research Team
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default QuantumMaterialsDiscoveryPage;