import { Layout } from '@/components/Layout'

export const metadata = {
  title: 'Service - AI-Powered AI Solution',
  description: 'Automated Scope 1-3 carbon accounting: ingests utility bills, cloud usage, travel itineraries, supplier invoices, and calculates real-time carbon intensity scor',
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
            Automated Scope 1-3 carbon accounting: ingests utility bills, cloud usage, travel itineraries, supplier invoices, and calculates real-time carbon intensity scores with prioritised reduction actions and ESG report-ready outputs.
          </p>

          <div className="bg-slate-900 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">
              Key Features
            </h2>
            <ul className="list-disc list-inside space-y-2">
            <li className="text-purple-300">✓ Scope 1-3 automatic accounting from bills, APIs, and invoices</li>
            <li className="text-purple-300">✓ Machine learning intensity factors per city, data-centre, and carrier</li>
            <li className="text-purple-300">✓ Priority-ranked action plan generated weekly</li>
            <li className="text-purple-300">✓ ESG/CSRD-ready report PDF and CSV exports</li>
            <li className="text-purple-300">✓ Alerts: budget exceeded, deviation from reduction trajectory</li>
            </ul>
          </div>

          <div className="bg-slate-900 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">
              Business Benefits
            </h2>
            <ul className="list-disc list-inside space-y-2">
            <li className="text-purple-300">✓ Cut ESG reporting cost ~80% by automating data collection and calculation</li>
            <li className="text-purple-300">✓ Finish CSRD-ready ESG report in 3 days vs. 3 weeks manually</li>
            <li className="text-purple-300">✓ Reduce carbon intensity 15-30% in 12 months with AI action plans</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Pricing</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold mb-2">$149</div>
                <div>Basic</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-3xl font-bold mb-2">$499</div>
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
