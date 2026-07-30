import { Layout } from '@/components/Layout'

export const metadata = {
  title: 'Service - AI-Powered Finance Solution',
  description: 'Satellite + IoT ocean analytics: track fish stocks, detect illegal fishing, monitor coral reef health, and model climate impact on marine ecosystems. Supports M',
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
            Satellite + IoT ocean analytics: track fish stocks, detect illegal fishing, monitor coral reef health, and model climate impact on marine ecosystems. Supports MSC certification and UN SDG 14 reporting.
          </p>

          <div className="bg-slate-900 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">
              Key Features
            </h2>
            <ul className="list-disc list-inside space-y-2">
            <li className="text-purple-300">✓ Satellite & AIS vessel tracking</li>
            <li className="text-purple-300">✓ Fish stock abundance estimation</li>
            <li className="text-purple-300">✓ Illegal fishing detection & alerting</li>
            <li className="text-purple-300">✓ Coral reef health monitoring</li>
            <li className="text-purple-300">✓ UN SDG 14 compliance reporting</li>
            </ul>
          </div>

          <div className="bg-slate-900 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">
              Business Benefits
            </h2>
            <ul className="list-disc list-inside space-y-2">
            <li className="text-purple-300">✓ Reduce costs with ai marine & fisheries sustainability monitor</li>
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
