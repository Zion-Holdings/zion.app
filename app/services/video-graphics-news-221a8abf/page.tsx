import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Video Graphics - News | Zion Tech Group',
  description: 'Revolutionize news through intelligent automation. Our Video Graphics - News leverages advanced machine learning to deliver graphics generation at scale.',
  alternates: {
    canonical: 'https://ziontechgroup.com/services/video-graphics-news-221a8abf',
  },
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Video Graphics - News</h1>
          <p className="text-lg text-gray-300 mb-8">Revolutionize news through intelligent automation. Our Video Graphics - News leverages advanced machine learning to deliver graphics generation at scale.</p>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-900/30 text-purple-300 text-sm">
            <span className="mr-2">💡</span>
            <span>media</span>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>API-first design with comprehensive REST and GraphQL endpoints</li>
            <li>Microservices deployment with container orchestration</li>
            <li>Serverless functions for cost-effective scaling</li>
            <li>Audit trails with compliance reporting</li>
            <li>Auto-scaling capabilities with predictive scaling</li>
            <li>Content moderation with AI-powered filtering</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Benefits</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>3x faster decision making with real-time insights</li>
            <li>ROI achieved in under 90 days with cost savings</li>
            <li>Reduced human error by 95% with automated processes</li>
            <li>99.9% uptime guarantee with redundant architecture</li>
            <li>Dynamic resource allocation based on demand patterns</li>
            <li>24/7 automated operations without human intervention</li>
            <li>Automated compliance reporting for regulatory requirements</li>
            <li>Enterprise-grade security with end-to-end encryption</li>
            <li>Seamless integration with existing systems and workflows</li>
          </ul>
        </section>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$199/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$499/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$1499/month</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://calendly.com/kleber-ziontechgroup/consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </main>
  );
}
