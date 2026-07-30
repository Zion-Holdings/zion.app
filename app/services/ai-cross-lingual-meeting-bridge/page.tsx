import { Layout } from '@/components/Layout'

export const metadata = {
  title: 'Service - AI-Powered Finance Solution',
  description: 'Multi-language meeting platform: real-time simultaneous interpretation across 40+ languages and dialects, live bilingual captions, cultural-adaptation annotatio',
}

export default function ServicePage() {
  return (
    <Layout>
      <div className="min-h-screen bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto py-16 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-400 mb-6">
            Service
          </h1>
          
          <p className="text-xl text-slate-300 mb-8">
            Multi-language meeting platform: real-time simultaneous interpretation across 40+ languages and dialects, live bilingual captions, cultural-adaptation annotations, silent-watch spectator mode, executive summary auto-generation.
          </p>

          <div className="bg-slate-900 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">
              Key Features
            </h2>
            <ul className="list-disc list-inside space-y-2">
            <li className="text-purple-300">✓ Simultaneous interpretation across 40+ languages and dialects per meeting</li>
            <li className="text-purple-300">✓ Live bilingual captions with per-speaker timestamped transcript</li>
            <li className="text-purple-300">✓ Cultural-adaptation annotations including politeness norms and idiom equivalents</li>
            <li className="text-purple-300">✓ Silent-watch spectator mode and executive summary auto-generated after each call</li>
            </ul>
          </div>

          <div className="bg-slate-900 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">
              Business Benefits
            </h2>
            <ul className="list-disc list-inside space-y-2">
            <li className="text-purple-300">✓ Reduce costs with cross-lingual meeting bridge</li>
            <li className="text-purple-300">✓ Improve operational efficiency</li>
            <li className="text-purple-300">✓ Scale without complexity</li>
            <li className="text-purple-300">✓ Enterprise-grade reliability</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Pricing</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold mb-2">$$149/mo</div>
                <div>Basic</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-3xl font-bold mb-2">$$449/mo</div>
                <div>Pro</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold mb-2">$$1,499/mo</div>
                <div>Enterprise</div>
              </div>
            </div>
          </div>

          <a 
            href="https://calendly.com/kleber-ziontechgroup" 
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full transition-colors"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </Layout>
  )
}
