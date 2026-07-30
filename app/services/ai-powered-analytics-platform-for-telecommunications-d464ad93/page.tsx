import { Layout } from '@/components/Layout'

export const metadata = {
  title: 'Service - AI-Powered Telecommunications Solution',
  description: 'Advanced telecommunications analytics platform leveraging machine learning to Network optimization, customer churn prediction, 5G analytics. Provides real-time ',
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
            Advanced telecommunications analytics platform leveraging machine learning to Network optimization, customer churn prediction, 5G analytics. Provides real-time insights and predictive capabilities for strategic decision-making.
          </p>

          <div className="bg-slate-900 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">
              Key Features
            </h2>
            <ul className="list-disc list-inside space-y-2">
            <li className="text-purple-300">✓ AI-powered automation</li>
            <li className="text-purple-300">✓ Enterprise-grade security</li>
            <li className="text-purple-300">✓ 24/7 monitoring</li>
            <li className="text-purple-300">✓ API-first integration</li>
            <li className="text-purple-300">✓ Scalable architecture</li>
            </ul>
          </div>

          <div className="bg-slate-900 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">
              Business Benefits
            </h2>
            <ul className="list-disc list-inside space-y-2">
            <li className="text-purple-300">✓ 63% reduction in operational costs</li>
            <li className="text-purple-300">✓ Process 78% faster with automation</li>
            <li className="text-purple-300">✓ 99.9% uptime guarantee with enterprise SLAs</li>
            <li className="text-purple-300">✓ ROI realized in under 90 days</li>
            <li className="text-purple-300">✓ Zero-downtime deployment</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Pricing</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold mb-2">$60</div>
                <div>Basic</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-3xl font-bold mb-2">$342</div>
                <div>Pro</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold mb-2">$713</div>
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
