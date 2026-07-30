import { Layout } from '@/components/Layout'

export const metadata = {
  title: 'Service - AI-Powered hr-tech Solution',
  description: 'AI platform that measures employee engagement in real-time, predicts flight risk, and recommends retention actions. Pulse surveys, sentiment analysis, and manag',
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
            AI platform that measures employee engagement in real-time, predicts flight risk, and recommends retention actions. Pulse surveys, sentiment analysis, and manager coaching.
          </p>

          <div className="bg-slate-900 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">
              Key Features
            </h2>
            <ul className="list-disc list-inside space-y-2">
            <li className="text-purple-300">✓ Real-time engagement monitoring</li>
            <li className="text-purple-300">✓ AI flight risk prediction</li>
            <li className="text-purple-300">✓ Automated pulse surveys with sentiment analysis</li>
            <li className="text-purple-300">✓ Manager coaching recommendations</li>
            <li className="text-purple-300">✓ Benchmarking against industry standards</li>
            </ul>
          </div>

          <div className="bg-slate-900 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">
              Business Benefits
            </h2>
            <ul className="list-disc list-inside space-y-2">
            <li className="text-purple-300">✓ Reduce turnover by 25%</li>
            <li className="text-purple-300">✓ Identify at-risk employees 6 months early</li>
            <li className="text-purple-300">✓ Data-driven retention strategies</li>
            <li className="text-purple-300">✓ Improve employee satisfaction scores</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Pricing</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold mb-2">$$5/employee/mo</div>
                <div>Basic</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-3xl font-bold mb-2">$$10/employee/mo</div>
                <div>Pro</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold mb-2">$Custom</div>
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
