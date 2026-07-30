import { Layout } from '@/components/Layout'

export const metadata = {
  title: 'Service - AI-Powered Legal & Compliance Solution',
  description: 'Predict visa/green card approval odds, auto-fill forms (I-130, I-485, N-400), detect missing documents, and track case status. Trained on 10M+ USCIS decisions.',
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
            Predict visa/green card approval odds, auto-fill forms (I-130, I-485, N-400), detect missing documents, and track case status. Trained on 10M+ USCIS decisions.
          </p>

          <div className="bg-slate-900 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">
              Key Features
            </h2>
            <ul className="list-disc list-inside space-y-2">
            <li className="text-purple-300">✓ Approval probability scoring</li>
            <li className="text-purple-300">✓ Auto-form filling (USCIS forms)</li>
            <li className="text-purple-300">✓ Missing document detection</li>
            <li className="text-purple-300">✓ Case status auto-tracking</li>
            <li className="text-purple-300">✓ RFE (Request for Evidence) prediction</li>
            </ul>
          </div>

          <div className="bg-slate-900 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">
              Business Benefits
            </h2>
            <ul className="list-disc list-inside space-y-2">
            <li className="text-purple-300">✓ Know approval odds before filing</li>
            <li className="text-purple-300">✓ Auto-complete forms error-free</li>
            <li className="text-purple-300">✓ Reduce RFEs by 50%</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Pricing</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold mb-2">$49/case</div>
                <div>Basic</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-3xl font-bold mb-2">$149/case</div>
                <div>Pro</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold mb-2">$499/case</div>
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
