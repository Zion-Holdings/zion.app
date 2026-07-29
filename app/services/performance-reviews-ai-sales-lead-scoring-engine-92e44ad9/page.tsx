import { Metadata } from 'next';

    export const metadata: Metadata = {
      title: 'Performance Reviews AI Sales Lead Scoring Engine',
      description: 'performance reviews solution for logistics industry. Scores and prioritizes sales leads in real-time using behavioral data and engagement patterns.',
      alternates: {
        canonical: 'https://ziontechgroup.com/services/performance-reviews-ai-sales-lead-scoring-engine-92e44ad9',
      },
    };

    export default function ServicePage() {
      return (
        <main className="min-h-screen bg-slate-950 text-white">
          <div className="max-w-4xl mx-auto px-6 py-16">
            <h1 className="text-4xl font-bold mb-6">Performance Reviews AI Sales Lead Scoring Engine</h1>
            <p className="text-xl text-gray-400 mb-8">performance reviews solution for logistics industry. Scores and prioritizes sales leads in real-time using behavioral data and engagement patterns.</p>
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="list-disc list-inside space-y-2">
                {["Lead scoring","Behavioral analysis"]).map((f) => <li key={f} className="text-gray-300">{f}</li>)}
              </ul>
            </div>
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Benefits</h2>
              <ul className="list-disc list-inside space-y-2">
                {["40% more qualified leads","Higher conversion rates"]).map((b) => <li key={b} className="text-purple-300">{b}</li>)}
              </ul>
            </div>
            <section className="mt-16 bg-slate-900 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Get Started</h2>
              <p className="text-gray-400 mb-6">Ready to transform your logistics operations?</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="mailto:kleber@ziontechgroup.com" className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold">
                  Contact Us
                </a>
                <a href="/contact" className="px-6 py-3 border border-purple-500 hover:bg-purple-900/20 rounded-lg">
                  Book a Demo
                </a>
              </div>
            </section>
          </div>
        </main>
      );
    }
    