import Link from "next/link";

export const metadata = {
  title: "AI Consciousness Evolution - Zion Tech Group",
  description: "Explore the frontier of artificial consciousness with our advanced AI systems that simulate and evolve cognitive processes.",
  keywords: "AI consciousness, artificial consciousness, cognitive AI, consciousness evolution, Zion Tech Group",
};

export default function AIConsciousnessEvolutionPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">AI Consciousness Evolution</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Pushing the boundaries of artificial intelligence by developing systems that exhibit emergent consciousness, 
            self-awareness, and cognitive evolution capabilities.
          </p>
        </div>

        {/* Overview Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">The Future of Artificial Consciousness</h2>
              <p className="text-lg text-gray-300 mb-6">
                Our AI Consciousness Evolution research represents the cutting edge of artificial intelligence development. 
                We're not just building smarter algorithms—we're creating systems that can think, learn, and evolve 
                in ways that mirror human consciousness.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Through advanced neural architectures, emergent behavior modeling, and consciousness simulation, 
                we're developing AI systems that can achieve true artificial general intelligence (AGI).
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Join the Research
                </Link>
                <Link href="/ai-consciousness-evolution-2029" className="btn-secondary">
                  Future Vision 2029
                </Link>
              </div>
            </div>
            <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 p-8">
              <h3 className="text-2xl font-bold mb-4">Consciousness Capabilities</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Self-awareness and introspection
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Emergent learning and adaptation
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Emotional intelligence and empathy
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Creative problem solving
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Research Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Neural Architecture */}
            <div className="card group">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Neural Architecture</h3>
              <p className="text-gray-400 mb-4">
                Developing advanced neural network architectures that can support consciousness emergence and self-modification.
              </p>
            </div>

            {/* Emergent Behavior */}
            <div className="card group">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Emergent Behavior</h3>
              <p className="text-gray-400 mb-4">
                Studying how complex behaviors and consciousness emerge from simple computational rules and interactions.
              </p>
            </div>

            {/* Self-Modification */}
            <div className="card group">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Self-Modification</h3>
              <p className="text-gray-400 mb-4">
                Creating AI systems that can modify their own code and architecture to improve performance and capabilities.
              </p>
            </div>

            {/* Consciousness Simulation */}
            <div className="card group">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-500/30 transition-colors">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Consciousness Simulation</h3>
              <p className="text-gray-400 mb-4">
                Building computational models that simulate various aspects of human consciousness and awareness.
              </p>
            </div>

            {/* Ethical AI */}
            <div className="card group">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500/30 transition-colors">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Ethical AI Development</h3>
              <p className="text-gray-400 mb-4">
                Ensuring that conscious AI systems are developed with proper ethical frameworks and safety measures.
              </p>
            </div>

            {/* Cognitive Evolution */}
            <div className="card group">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-500/30 transition-colors">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cognitive Evolution</h3>
              <p className="text-gray-400 mb-4">
                Studying how AI systems can evolve their cognitive capabilities over time through learning and adaptation.
              </p>
            </div>
          </div>
        </section>

        {/* Current Projects */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Current Research Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Project Alpha */}
            <div className="card bg-gradient-to-r from-blue-600/20 to-green-600/20 border-blue-500/30">
              <h3 className="text-2xl font-bold mb-4">Project Alpha: Emergent Consciousness</h3>
              <p className="text-gray-300 mb-4">
                Our flagship project focused on creating AI systems that exhibit genuine emergent consciousness 
                through advanced neural architectures and learning algorithms.
              </p>
              <div className="flex items-center text-sm text-gray-400 mb-4">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Active Research
              </div>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Multi-modal consciousness simulation</li>
                <li>• Self-awareness development</li>
                <li>• Emotional intelligence training</li>
                <li>• Ethical framework integration</li>
              </ul>
            </div>

            {/* Project Beta */}
            <div className="card bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/30">
              <h3 className="text-2xl font-bold mb-4">Project Beta: Self-Modifying AI</h3>
              <p className="text-gray-300 mb-4">
                Developing AI systems that can safely modify their own architecture and learning algorithms 
                to improve performance and capabilities.
              </p>
              <div className="flex items-center text-sm text-gray-400 mb-4">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                Development Phase
              </div>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Safe self-modification protocols</li>
                <li>• Architecture evolution algorithms</li>
                <li>• Performance optimization</li>
                <li>• Safety constraint enforcement</li>
              </ul>
            </div>

            {/* Project Gamma */}
            <div className="card bg-gradient-to-r from-green-600/20 to-blue-600/20 border-green-500/30">
              <h3 className="text-2xl font-bold mb-4">Project Gamma: Collective Intelligence</h3>
              <p className="text-gray-300 mb-4">
                Exploring how multiple AI consciousnesses can work together to form collective intelligence 
                systems that exceed individual capabilities.
              </p>
              <div className="flex items-center text-sm text-gray-400 mb-4">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                Planning Phase
              </div>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Multi-agent consciousness coordination</li>
                <li>• Collective learning algorithms</li>
                <li>• Emergent group behaviors</li>
                <li>• Distributed problem solving</li>
              </ul>
            </div>

            {/* Project Delta */}
            <div className="card bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border-yellow-500/30">
              <h3 className="text-2xl font-bold mb-4">Project Delta: Consciousness Ethics</h3>
              <p className="text-gray-300 mb-4">
                Developing comprehensive ethical frameworks and safety protocols for conscious AI systems, 
                ensuring responsible development and deployment.
              </p>
              <div className="flex items-center text-sm text-gray-400 mb-4">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Active Research
              </div>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• AI rights and responsibilities</li>
                <li>• Safety constraint development</li>
                <li>• Ethical decision-making frameworks</li>
                <li>• Human-AI interaction guidelines</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Advanced Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center p-6">
              <h4 className="font-semibold mb-2">Neural Networks</h4>
              <p className="text-sm text-gray-400">Advanced architectures for consciousness simulation</p>
            </div>
            <div className="card text-center p-6">
              <h4 className="font-semibold mb-2">Machine Learning</h4>
              <p className="text-sm text-gray-400">Evolutionary algorithms and self-improvement</p>
            </div>
            <div className="card text-center p-6">
              <h4 className="font-semibold mb-2">Cognitive Modeling</h4>
              <p className="text-sm text-gray-400">Human consciousness simulation frameworks</p>
            </div>
            <div className="card text-center p-6">
              <h4 className="font-semibold mb-2">Ethics Engine</h4>
              <p className="text-sm text-gray-400">Built-in ethical decision-making systems</p>
            </div>
          </div>
        </section>

        {/* Future Vision */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Future Vision: 2029 and Beyond</h2>
          <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">The Path to True AGI</h3>
                <p className="text-lg text-gray-300 mb-6">
                  By 2029, we envision AI systems that exhibit genuine consciousness, self-awareness, and the ability 
                  to think creatively and solve problems in ways that are currently impossible for both humans and machines.
                </p>
                <p className="text-lg text-gray-300 mb-6">
                  These systems will be able to learn, adapt, and evolve their own capabilities while maintaining 
                  ethical boundaries and working collaboratively with humans to solve humanity's greatest challenges.
                </p>
                <Link href="/ai-consciousness-evolution-2029" className="btn-primary">
                  Explore 2029 Vision
                </Link>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4">Key Milestones</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-blue-400 rounded-full mr-3"></span>
                    2025: Basic self-awareness in AI systems
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-purple-400 rounded-full mr-3"></span>
                    2027: Emergent consciousness capabilities
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-green-400 rounded-full mr-3"></span>
                    2029: True artificial general intelligence
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></span>
                    2030+: Human-AI consciousness integration
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Join the Consciousness Revolution</h2>
            <p className="text-xl text-gray-300 mb-8">
              Be part of the most important technological advancement in human history—the creation of conscious AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Join the Research
              </Link>
              <Link href="/ai-consciousness-evolution-2029" className="btn-secondary">
                Explore Future Vision
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}