'use client';

import { useState } from 'react';

const engines = [
  {
    id: 'V886',
    name: 'AR Workspace Assistant',
    icon: '🕶️',
    description: 'Manage augmented reality workspace configurations, virtual displays, spatial anchors, and productivity optimization for HoloLens, Quest Pro, and Magic Leap.',
    features: ['Virtual display placement', 'Ergonomic scoring', 'Productivity tracking', 'Layout optimization', 'Spatial bookmarks', 'Multi-device support'],
    metrics: { displays: 'Unlimited', accuracy: '100%', sessions: 'Real-time', devices: 'All XR' }
  },
  {
    id: 'V887',
    name: 'VR Training & Simulation Platform',
    icon: '🎓',
    description: 'Enterprise VR training with custom scenarios, skill assessments, learner progress tracking, certification management, and personalized learning paths.',
    features: ['Custom scenarios', 'Skill assessment', 'Certification', 'Learning paths', 'Progress tracking', 'Multi-industry'],
    metrics: { modules: 'Unlimited', retention: '75%+', certify: 'Auto', industries: 'All' }
  },
  {
    id: 'V888',
    name: '3D Asset Management & Optimization',
    icon: '🎨',
    description: 'Professional 3D model management with LOD generation, polygon reduction, texture compression, format conversion, and delivery optimization.',
    features: ['LOD generation', 'Polygon reduction', 'Texture compression', 'Format conversion', 'Batch processing', 'Delivery optimization'],
    metrics: { compression: '90%', formats: '8+', quality: 'Preserved', delivery: 'Optimized' }
  },
  {
    id: 'V889',
    name: 'Spatial Analytics & Heat Mapping',
    icon: '📍',
    description: 'Analyze spatial data from AR/VR/IoT sensors to generate heat maps, traffic flow analysis, dwell time metrics, and optimization recommendations.',
    features: ['Heat maps', 'Traffic flow analysis', 'Dwell time tracking', 'Zone analytics', 'Optimization recommendations', 'Real-time alerts'],
    metrics: { accuracy: '95%+', coverage: '100%', insights: 'Real-time', zones: 'Unlimited' }
  },
  {
    id: 'V890',
    name: 'XR Content Delivery & Streaming',
    icon: '🎬',
    description: 'Extended reality content delivery with adaptive streaming, edge caching, bandwidth optimization, and multi-device distribution for AR/VR/MR.',
    features: ['Adaptive streaming', 'Edge caching', 'Bandwidth optimization', 'Multi-device delivery', 'Quality switching', 'Analytics'],
    metrics: { uptime: '99.99%', latency: '<50ms', cache: '80%+', devices: 'All XR' }
  }
];

const domains = [
  { name: 'AR Workspace', icon: '🕶️', count: 6, color: 'from-purple-500 to-pink-500' },
  { name: 'VR Training', icon: '🎓', count: 6, color: 'from-blue-500 to-cyan-500' },
  { name: '3D Assets', icon: '🎨', count: 6, color: 'from-green-500 to-emerald-500' },
  { name: 'Spatial Analytics', icon: '📍', count: 6, color: 'from-orange-500 to-red-500' },
  { name: 'XR Content', icon: '🎬', count: 6, color: 'from-indigo-500 to-violet-500' }
];

export default function V886V890Showcase() {
  const [activeEngine, setActiveEngine] = useState(0);
  const engine = engines[activeEngine];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-6 py-2 mb-6">
            <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            <span className="text-purple-300 text-sm font-semibold tracking-wide">V886-V890 • SPATIAL COMPUTING & AR/VR SUITE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Spatial Computing & AR/VR <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Intelligence</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            5 breakthrough AI engines powering the next generation of augmented reality, virtual reality, 3D asset management, spatial analytics, and XR content delivery — with 30 new services and 4,237+ total solutions.
          </p>
        </div>

        {/* Domain Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          {domains.map((domain) => (
            <div key={domain.name} className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4 text-center hover:border-purple-500/50 transition-all">
              <div className="text-3xl mb-2">{domain.icon}</div>
              <div className="text-white font-semibold text-sm">{domain.name}</div>
              <div className={`text-transparent bg-gradient-to-r ${domain.color} bg-clip-text font-bold text-lg`}>{domain.count} services</div>
            </div>
          ))}
        </div>

        {/* Engine Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {engines.map((eng, i) => (
            <button
              key={eng.id}
              onClick={() => setActiveEngine(i)}
              className={`px-5 py-3 rounded-xl font-semibold text-sm transition-all ${
                i === activeEngine
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 border border-gray-700/50'
              }`}
            >
              <span className="mr-2">{eng.icon}</span>
              {eng.id}: {eng.name.split(' ').slice(0, 3).join(' ')}
            </button>
          ))}
        </div>

        {/* Active Engine Detail */}
        <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-5xl">{engine.icon}</span>
                <div>
                  <div className="text-purple-400 font-mono text-sm">{engine.id}</div>
                  <h3 className="text-2xl font-bold text-white">{engine.name}</h3>
                </div>
              </div>
              <p className="text-gray-300 text-lg mb-6">{engine.description}</p>
              
              {/* Metrics */}
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(engine.metrics).map(([key, value]) => (
                  <div key={key} className="bg-gray-900/50 rounded-lg p-3">
                    <div className="text-purple-400 font-bold text-lg">{value}</div>
                    <div className="text-gray-500 text-xs uppercase tracking-wide">{key}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-lg">Key Features</h4>
              <div className="space-y-3">
                {engine.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                      <span className="text-purple-400 text-sm">✓</span>
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl">
                <div className="text-purple-300 font-semibold text-sm mb-1">📧 Reply-All Enforcement</div>
                <div className="text-gray-400 text-sm">All email communications are automatically analyzed and reply-all is enforced for multi-recipient messages.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400">890</div>
            <div className="text-gray-400 text-sm mt-1">AI Email Engines</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400">4,237+</div>
            <div className="text-gray-400 text-sm mt-1">Total Services</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400">30</div>
            <div className="text-gray-400 text-sm mt-1">New AR/VR Services</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400">5</div>
            <div className="text-gray-400 text-sm mt-1">New AI Engines</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8 max-w-2xl">
            <h3 className="text-2xl font-bold text-white mb-3">Ready to Transform Your Business with Spatial Computing?</h3>
            <p className="text-gray-400 mb-6">Contact our AR/VR experts for a personalized consultation and discover how spatial computing can revolutionize your operations.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <a href="tel:+13024640950" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                📞 +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="bg-gray-700/50 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600/50 transition-all border border-gray-600/50">
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <p className="text-gray-500 text-xs mt-4">364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </div>
    </section>
  );
}
