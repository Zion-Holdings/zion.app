import type { Metadata } from 'next'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import StandardPage from '@/components/StandardPage'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Hermes Agent A2A Protocol — Agent-to-Agent Integration | Zion Tech Group',
  description: 'Connect Hermes Agent to the Agent-to-Agent (A2A) protocol. Discover, talk to, and be driven by other A2A-compatible agents across heterogeneous multi-agent systems.',
  openGraph: {
    title: 'Hermes Agent A2A Protocol Integration',
    description: 'Agent-to-Agent protocol integration for Hermes Agent — join multi-agent ecosystems with A2A v1.0.',
    url: 'https://ziontechgroup.com/services/hermes-agent-a2a-protocol',
    type: 'website',
  },
  alternates: { canonical: '/services/hermes-agent-a2a-protocol' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hermes Agent A2A Protocol Integration',
  description: 'Connect Hermes Agent to the Agent-to-Agent (A2A) protocol for cross-platform agent collaboration.',
  serviceType: 'a2a-integration',
  provider: {
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@ziontechgroup.com',
      telephone: '+1 302 464 0950',
      contactType: 'sales',
    },
  },
  areaServed: 'Global',
  offerMode: 'https://schema.org/OnlineBooking',
}

export default function HermesA2APage() {
  return (
    <StandardPage
      title="Hermes Agent A2A Protocol"
      subtitle="Join the Agent-to-Agent ecosystem. Discover, communicate with, and be driven by other A2A-compatible agents across heterogeneous multi-agent systems."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services/' },
        { label: 'Hermes Agent A2A Protocol' },
      ]}
      actions={[
        { label: 'Talk to an engineer', href: '/contact/', style: 'primary' },
        { label: 'Explore all Hermes services', href: '/services/', style: 'secondary' },
      ]}
    >
      <JsonLd data={jsonLd} />
      <BreadcrumbSchema path="/services/hermes-agent-a2a-protocol" title="Hermes Agent A2A Protocol" />

      <div className="max-w-5xl mx-auto">
        {/* Hero */}
        <div className="bg-gradient-to-br from-blue-900/20 via-indigo-800/15 to-purple-900/20 rounded-3xl p-10 mb-10 border border-blue-500/20">
          <div className="flex items-start gap-4">
            <div className="text-5xl shrink-0">🔗</div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-white mb-3">A2A Protocol Integration</h1>
              <p className="text-xl text-slate-200 mb-6 max-w-3xl">
                Connect Hermes Agent to the Agent-to-Agent (A2A) protocol. Discover, talk to, and be driven
                by other A2A-compatible agents across heterogeneous multi-agent systems.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4 text-center min-w-[140px]">
                  <div className="text-3xl font-bold text-blue-400">A2A</div>
                  <div className="text-xs text-slate-400 mt-1">v1.0 Compatible</div>
                </div>
                <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4 text-center min-w-[140px]">
                  <div className="text-3xl font-bold text-indigo-400">100+</div>
                  <div className="text-xs text-slate-400 mt-1">Agent Networks</div>
                </div>
                <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4 text-center min-w-[140px]">
                  <div className="text-3xl font-bold text-purple-400">Real-time</div>
                  <div className="text-xs text-slate-400 mt-1">Handshake</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="prose prose-slate prose-invert max-w-none mb-12">
          <h2>Standard Protocol for Agent-to-Agent Communication</h2>
          <p>
            The Agent-to-Agent (A2A) protocol is an open standard for agent-to-agent communication.
            Hermes Agent's bundled A2A plugin lets you <strong>discover, talk to, and be driven by
            other A2A-compatible agents</strong> — closing one of the longest-standing feature requests
            in the Hermes ecosystem.
          </p>

          <h3>What You Get</h3>
          <ul>
            <li><strong>Discovery</strong> — Hermes can find A2A agents on your network or via public registries.</li>
            <li><strong>Bidirectional communication</strong> — Hermes both initiates conversations and responds to incoming A2A requests.</li>
            <li><strong>Heterogeneous agent support</strong> — Connect Hermes (Claude) with other agents (GPT, Gemini, open-source) in a single multi-agent system.</li>
            <li><strong>Workflow delegation</strong> — Hand off specific subtasks to specialized agents and reconcile results.</li>
            <li><strong>Protocol compliance</strong> — Full A2A v1.0 implementation with authentication, streaming, and state management.</li>
          </ul>
        </div>

        {/* How It Works */}
        <div className="prose prose-slate prose-invert max-w-none mb-12">
          <h2>How the A2A Protocol Works</h2>
          <p>The protocol defines a standard wire format for:</p>
          <ol>
            <li><strong>Agent Cards</strong> — Agents publish their capabilities, model, and contact info as machine-readable cards.</li>
            <li><strong>Task Negotiation</strong> — Agents exchange task requests, negotiate parameters, and agree on execution plans.</li>
            <li><strong>Data Exchange</strong> — Structured data, files, and streaming results flow between agents.</li>
            <li><strong>State Synchronization</strong> — Both agents maintain consistent task state across the conversation.</li>
          </ol>
        </div>

        {/* Use Cases */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-6">
            <div className="text-3xl mb-3">🏢</div>
            <h3 className="text-xl font-bold text-white mb-2">Enterprise Multi-Agent Workflows</h3>
            <p className="text-slate-300">Connect Hermes as a research agent in a larger enterprise A2A network. Other agents handle compliance, deployment, or customer data while Hermes handles research and analysis.</p>
          </div>
          <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-6">
            <div className="text-3xl mb-3">🔬</div>
            <h3 className="text-xl font-bold text-white mb-2">Cross-Platform Agent Swarms</h3>
            <p className="text-slate-300">Build agent swarms where Hermes coordinates with agents from different vendors — Claude, GPT, Gemini, and open-source models working on different parts of a problem.</p>
          </div>
          <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-6">
            <div className="text-3xl mb-3">🔄</div>
            <h3 className="text-xl font-bold text-white mb-2">A2A Gateway</h3>
            <p className="text-slate-300">Bridge your internal agent ecosystem to external A2A networks. Hermes acts as both gateway and participant, routing tasks to the right specialized agent.</p>
          </div>
          <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-6">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-xl font-bold text-white mb-2">A2A Monitoring</h3>
            <p className="text-slate-300">Monitor all agent-to-agent conversations with Langfuse observability. Trace every task negotiation, data exchange, and state transition across the A2A network.</p>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">A2A Integration Packages</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-8">
              <div className="text-2xl font-bold text-blue-400 mb-2">A2A Bridge</div>
              <div className="text-xl font-bold text-white mb-4">$1,499</div>
              <ul className="text-sm text-slate-300 space-y-3">
                <li>A2A v1.0 plugin integration for 1 Hermes profile</li>
                <li>Agent discovery + bidirectional communication</li>
                <li>Streaming data exchange support</li>
                <li>Authentication & state management</li>
                <li>Langfuse observability hooks</li>
                <li>Basic testing + documentation</li>
              </ul>
            </div>
            <div className="bg-slate-800/40 border-2 border-purple-500/40 rounded-xl p-8">
              <div className="text-2xl font-bold text-purple-400 mb-2">A2A Ecosystem</div>
              <div className="text-xl font-bold text-white mb-4">$4,999</div>
              <ul className="text-sm text-slate-300 space-y-3">
                <li>Multi-profile A2A network setup</li>
                <li>Cross-machine + cross-network bridging</li>
                <li>Agent Card directory + discovery registry</li>
                <li>Full streaming + file exchange support</li>
                <li>Enterprise auth (OAuth, mTLS, JWT)</li>
                <li>Complete monitoring + alerting stack</li>
                <li>Ongoing A2A protocol updates</li>
                <li>24/7 support SLA</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-12 bg-gradient-to-r from-blue-900/20 via-indigo-800/15 to-purple-900/20 rounded-3xl border border-blue-500/20">
          <h2 className="text-3xl font-bold text-white mb-4">Join the A2A Ecosystem</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Connect your Hermes Agent to the emerging Agent-to-Agent protocol standard. Be compatible with
            the next generation of multi-agent systems.
          </p>
          <a
            href="/contact/"
            className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 px-8 rounded-xl transition"
          >
            Enable A2A for My Agents
          </a>
        </div>
      </div>
    </StandardPage>
  )
}
