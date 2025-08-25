import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Atom, Cloud, Shield, Zap, Cpu, Database, Network } from 'lucide-react';

const QuantumCloudInfrastructure: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Quantum Cloud Infrastructure
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Experience the future of computing with our quantum-powered cloud infrastructure 
            that delivers unprecedented performance, security, and scalability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Quantum Advantages */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Quantum Computing Advantages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <Atom className="h-12 w-12 text-zion-cyan mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Quantum Supremacy</h3>
              <p className="text-zion-slate-light">
                Solve complex problems that are impossible for classical computers, 
                including cryptography, optimization, and simulation.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <Zap className="h-12 w-12 text-zion-cyan mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Exponential Speed</h3>
              <p className="text-zion-slate-light">
                Process massive datasets and perform calculations at speeds 
                that would take classical computers centuries to complete.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <Shield className="h-12 w-12 text-zion-cyan mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Quantum Security</h3>
              <p className="text-zion-slate-light">
                Unbreakable encryption using quantum key distribution and 
                post-quantum cryptography algorithms.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <Cpu className="h-12 w-12 text-zion-cyan mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Parallel Processing</h3>
              <p className="text-zion-slate-light">
                Simultaneously explore multiple solutions and possibilities 
                through quantum superposition and entanglement.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <Database className="h-12 w-12 text-zion-cyan mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Quantum Memory</h3>
              <p className="text-zion-slate-light">
                Store and retrieve information using quantum states for 
                unprecedented data density and access speeds.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <Network className="h-12 w-12 text-zion-cyan mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Quantum Networking</h3>
              <p className="text-zion-slate-light">
                Instantaneous data transmission through quantum entanglement 
                across global quantum networks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Components */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Infrastructure Components
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Quantum Processing Units</h3>
              <ul className="space-y-4 text-zion-slate-light">
                <li className="flex items-start">
                  <Atom className="h-5 w-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                  <span>Superconducting qubit processors with 100+ qubits</span>
                </li>
                <li className="flex items-start">
                  <Atom className="h-5 w-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                  <span>Trapped ion quantum computers for high-fidelity operations</span>
                </li>
                <li className="flex items-start">
                  <Atom className="h-5 w-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                  <span>Topological qubits for error-resistant computing</span>
                </li>
                <li className="flex items-start">
                  <Atom className="h-5 w-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                  <span>Hybrid quantum-classical processing units</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Cloud Services</h3>
              <ul className="space-y-4 text-zion-slate-light">
                <li className="flex items-start">
                  <Cloud className="h-5 w-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                  <span>Quantum-as-a-Service (QaaS) platform</span>
                </li>
                <li className="flex items-start">
                  <Cloud className="h-5 w-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                  <span>Hybrid cloud integration with classical infrastructure</span>
                </li>
                <li className="flex items-start">
                  <Cloud className="h-5 w-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                  <span>Auto-scaling quantum resources</span>
                </li>
                <li className="flex items-start">
                  <Cloud className="h-5 w-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                  <span>Multi-tenant quantum computing environments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Revolutionary Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Financial Services</h3>
              <p className="text-zion-slate-light mb-4">
                Quantum computing revolutionizes risk assessment, portfolio optimization, 
                and fraud detection in real-time.
              </p>
              <ul className="text-zion-slate-light space-y-2">
                <li>• High-frequency trading optimization</li>
                <li>• Credit risk modeling</li>
                <li>• Market prediction algorithms</li>
                <li>• Blockchain security enhancement</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Drug Discovery</h3>
              <p className="text-zion-slate-light mb-4">
                Accelerate pharmaceutical research by simulating molecular interactions 
                and protein folding at quantum scales.
              </p>
              <ul className="text-zion-slate-light space-y-2">
                <li>• Molecular dynamics simulation</li>
                <li>• Drug-target interaction modeling</li>
                <li>• Protein structure prediction</li>
                <li>• Personalized medicine optimization</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Logistics & Supply Chain</h3>
              <p className="text-zion-slate-light mb-4">
                Solve complex optimization problems for route planning, inventory management, 
                and supply chain optimization.
              </p>
              <ul className="text-zion-slate-light space-y-2">
                <li>• Vehicle routing optimization</li>
                <li>• Warehouse layout optimization</li>
                <li>• Demand forecasting</li>
                <li>• Resource allocation</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Climate Modeling</h3>
              <p className="text-zion-slate-light mb-4">
                Advanced climate simulations and weather prediction using quantum algorithms 
                for complex atmospheric modeling.
              </p>
              <ul className="text-zion-slate-light space-y-2">
                <li>• Atmospheric circulation modeling</li>
                <li>• Ocean current simulation</li>
                <li>• Climate change prediction</li>
                <li>• Renewable energy optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Quantum Security Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Quantum Key Distribution</h3>
              <p className="text-zion-slate-light">
                Unbreakable encryption using quantum entanglement to generate 
                and distribute cryptographic keys securely.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Post-Quantum Cryptography</h3>
              <p className="text-zion-slate-light">
                Advanced cryptographic algorithms resistant to quantum attacks, 
                ensuring long-term security of sensitive data.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Quantum Random Number Generation</h3>
              <p className="text-zion-slate-light">
                True randomness generated from quantum phenomena for 
                cryptographic applications and secure communications.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Quantum Authentication</h3>
              <p className="text-zion-slate-light">
                Multi-factor authentication using quantum states for 
                enhanced security and identity verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experience Quantum Computing Today
          </h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Join the quantum revolution and unlock the power of the future 
            with our cutting-edge quantum cloud infrastructure.
          </p>
          <Link
            to="/request-quote"
            className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors text-lg"
          >
            Start Your Quantum Journey
            <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default QuantumCloudInfrastructure;