'use client';

import { useState } from 'react';

const engines = [
  {
    id: 'V881',
    name: 'Edge Device Manager & Orchestrator',
    icon: '📡',
    description: 'Complete edge device fleet management with remote monitoring, firmware OTA updates, health scoring, and automated alerting for thousands of distributed IoT devices.',
    features: ['Remote device monitoring', 'OTA firmware updates', 'Fleet health scoring', 'Anomaly detection', 'Battery management', 'Temperature alerts'],
    metrics: { devices: '10,000+', uptime: '99.9%', latency: '<50ms', alerts: 'Real-time' }
  },
  {
    id: 'V882',
    name: 'IoT Data Pipeline & Stream Processor',
    icon: '🌊',
    description: 'Real-time IoT data ingestion, transformation, and analytics pipeline with statistical anomaly detection, aggregation, and seamless cloud data lake integration.',
    features: ['Real-time stream processing', 'Statistical anomaly detection', 'Data aggregation', 'Schema validation', 'Batch ingestion', 'Cloud lake integration'],
    metrics: { throughput: '1M+ events/sec', latency: '<100ms', accuracy: '99.5%', streams: 'Unlimited' }
  },
  {
    id: 'V883',
    name: 'Digital Twin Simulator & Analyzer',
    icon: '🏗️',
    description: 'Create digital twins of physical systems (HVAC, manufacturing, buildings) for simulation, prediction, and optimization. Test scenarios virtually before deploying.',
    features: ['Virtual system modeling', 'Scenario simulation', 'Predictive maintenance', 'What-if analysis', 'Real-time sync', 'Performance optimization'],
    metrics: { accuracy: '95%+', scenarios: 'Unlimited', savings: '70% testing cost', drift: '<5%' }
  },
  {
    id: 'V884',
    name: 'Edge AI Model Deployment & Inference',
    icon: '🤖',
    description: 'Deploy, quantize, and optimize AI models for edge devices with sub-millisecond inference. Supports object detection, NLP, anomaly detection, and custom models.',
    features: ['Model quantization (INT8/INT4)', 'Edge deployment', 'Latency optimization', 'SLA monitoring', 'A/B testing', 'Auto-scaling'],
    metrics: { compression: '4x', latency: '<30ms', sla: '99.9%', models: 'Any framework' }
  },
  {
    id: 'V885',
    name: 'IoT Security & Threat Detection',
    icon: '🔒',
    description: 'Comprehensive IoT security with vulnerability scanning, network threat detection (DDoS, exfiltration), certificate management, and automated incident response.',
    features: ['Vulnerability scanning', 'DDoS detection', 'Certificate management', 'Data exfiltration prevention', 'Protocol enforcement', 'Incident response'],
    metrics: { coverage: '100% devices', detection: '<1sec', response: 'Automated', compliance: 'SOC2/ISO' }
  }
];

const domains = [
  { name: 'Edge Computing', icon: '🖥️', count: 6, color: 'from-blue-500 to-cyan-500' },
  { name: 'IoT Platforms', icon: '🌐', count: 6, color: 'from-green-500 to-emerald-500' },
  { name: 'Digital Twins', icon: '🏗️', count: 4, color: 'from-purple-500 to-pink-500' },
  { name: 'Edge AI', icon: '🤖', count: 6, color: 'from-orange-500 to-red-500' },
  { name: 'IoT Security', icon: '🔒', count: 4, color: 'from-red-500 to-rose-500' },
  { name: 'Smart Verticals', icon: '🏙️', count: 4, color: 'from-indigo-500 to-violet-500' }
];

export default function V881V885Showcase() {
  const [activeEngine, setActiveEngine] = useState(0);
  const engine = engines[activeEngine];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full px-6 py-2 mb-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-cyan-300 text-sm font-semibold tracking-wide">V881-V885 • EDGE COMPUTING & IoT SUITE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Edge Computing & IoT <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Intelligence</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            5 cutting-edge AI engines powering the next generation of edge computing, IoT data processing, digital twins, and IoT security — with 30 new services and 4,207+ total solutions.
          </p>
        </div>

        {/* Domain Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {domains.map((domain) => (
            <div key={domain.name} className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4 text-center hover:border-cyan-500/50 transition-all">
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
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
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
                  <div className="text-cyan-400 font-mono text-sm">{engine.id}</div>
                  <h3 className="text-2xl font-bold text-white">{engine.name}</h3>
                </div>
              </div>
              <p className="text-gray-300 text-lg mb-6">{engine.description}</p>
              
              {/* Metrics */}
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(engine.metrics).map(([key, value]) => (
                  <div key={key} className="bg-gray-900/50 rounded-lg p-3">
                    <div className="text-cyan-400 font-bold text-lg">{value}</div>
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
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                      <span className="text-cyan-400 text-sm">✓</span>
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl">
                <div className="text-cyan-300 font-semibold text-sm mb-1">📧 Reply-All Enforcement</div>
                <div className="text-gray-400 text-sm">All email communications are automatically analyzed and reply-all is enforced for multi-recipient messages.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400">885</div>
            <div className="text-gray-400 text-sm mt-1">AI Email Engines</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400">4,207+</div>
            <div className="text-gray-400 text-sm mt-1">Total Services</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400">30</div>
            <div className="text-gray-400 text-sm mt-1">New IoT Services</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400">5</div>
            <div className="text-gray-400 text-sm mt-1">New AI Engines</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8 max-w-2xl">
            <h3 className="text-2xl font-bold text-white mb-3">Ready to Transform Your Edge & IoT Infrastructure?</h3>
            <p className="text-gray-400 mb-6">Contact our team for a personalized assessment and discover how our Edge Computing & IoT solutions can revolutionize your operations.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <a href="tel:+13024640950" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
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
