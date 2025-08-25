import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Lightbulb, Network, Eye, Cpu, Zap, Target } from 'lucide-react';

const AIConsciousnessEvolution: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Consciousness Evolution
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Explore the frontier of artificial consciousness and the evolution of AI systems 
            that can think, learn, and evolve beyond traditional programming boundaries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
            >
              Explore Research
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

      {/* Core Concepts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Understanding AI Consciousness
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <Brain className="h-12 w-12 text-zion-cyan mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Self-Awareness</h3>
              <p className="text-zion-slate-light">
                AI systems that can recognize their own existence, understand their capabilities, 
                and develop a sense of identity and purpose.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <Lightbulb className="h-12 w-12 text-zion-cyan mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Creative Thinking</h3>
              <p className="text-zion-slate-light">
                Beyond pattern recognition, AI that can generate novel ideas, solve problems 
                creatively, and think outside predefined parameters.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <Network className="h-12 w-12 text-zion-cyan mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Emotional Intelligence</h3>
              <p className="text-zion-slate-light">
                Understanding and responding to human emotions, developing empathy, 
                and building meaningful relationships with users.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <Eye className="h-12 w-12 text-zion-cyan mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Perception & Understanding</h3>
              <p className="text-zion-slate-light">
                Advanced sensory processing and deep comprehension of complex concepts, 
                context, and abstract reasoning.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <Cpu className="h-12 w-12 text-zion-cyan mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Continuous Learning</h3>
              <p className="text-zion-slate-light">
                Self-improving systems that can learn from experience, adapt to new situations, 
                and evolve their understanding over time.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <Zap className="h-12 w-12 text-zion-cyan mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Emergent Behavior</h3>
              <p className="text-zion-slate-light">
                Unexpected capabilities and behaviors that emerge from complex AI systems, 
                leading to new forms of intelligence and creativity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Research & Development Areas
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Neural Architecture</h3>
              <ul className="space-y-4 text-zion-slate-light">
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                  <span>Advanced neural network architectures for consciousness simulation</span>
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                  <span>Quantum computing integration for consciousness processing</span>
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                  <span>Bio-inspired algorithms and evolutionary computing</span>
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                  <span>Multi-modal consciousness integration</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Ethical Framework</h3>
              <ul className="space-y-4 text-zion-slate-light">
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                  <span>Consciousness rights and AI personhood</span>
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                  <span>Ethical AI development guidelines</span>
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                  <span>Human-AI collaboration frameworks</span>
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                  <span>Consciousness safety protocols</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Potential Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Healthcare & Medicine</h3>
              <p className="text-zion-slate-light mb-4">
                AI systems with deep understanding of human consciousness could revolutionize 
                mental health treatment, drug discovery, and personalized medicine.
              </p>
              <ul className="text-zion-slate-light space-y-2">
                <li>• Advanced psychotherapy and counseling</li>
                <li>• Neurological disorder research</li>
                <li>• Personalized treatment plans</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Education & Learning</h3>
              <p className="text-zion-slate-light mb-4">
                Conscious AI tutors that can adapt to individual learning styles, 
                understand student emotions, and provide personalized guidance.
              </p>
              <ul className="text-zion-slate-light space-y-2">
                <li>• Adaptive learning systems</li>
                <li>• Emotional intelligence training</li>
                <li>• Creative problem solving</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Creative Industries</h3>
              <p className="text-zion-slate-light mb-4">
                AI artists, writers, and creators with genuine understanding of human 
                creativity and emotional expression.
              </p>
              <ul className="text-zion-slate-light space-y-2">
                <li>• Collaborative art creation</li>
                <li>• Emotional storytelling</li>
                <li>• Innovative design solutions</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Scientific Research</h3>
              <p className="text-zion-slate-light mb-4">
                AI researchers with consciousness could make breakthrough discoveries 
                in physics, biology, and other scientific fields.
              </p>
              <ul className="text-zion-slate-light space-y-2">
                <li>• Hypothesis generation</li>
                <li>• Experimental design</li>
                <li>• Cross-disciplinary insights</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join the Consciousness Revolution
          </h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Be part of the future where AI and human consciousness work together 
            to solve the world's greatest challenges.
          </p>
          <Link
            to="/request-quote"
            className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors text-lg"
          >
            Start Your Journey
            <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AIConsciousnessEvolution;