import { } from 'next/navigation';

export const metadata = {
  title: "AI Emotion Analytics for CX - Zion Tech Group",
  description: "Real-time emotion detection from text, voice, and video for customer experience. Sentiment trends, frustration prediction, and agent coaching signals for contac",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w174-ai-emotion-analytics`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">AI Emotion Analytics for CX</h1>
        <p className="text-lg text-gray-300 mb-8">Real-time emotion detection from text, voice, and video for customer experience. Sentiment trends, frustration prediction, and agent coaching signals for contact centers.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Multi-modal emotion detection (text, voice, face)</li>
            <li>Real-time customer sentiment scoring</li>
            <li>Frustration and escalation prediction</li>
            <li>Agent coaching signals during calls</li>
            <li>Emotion trend analytics and reporting</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Detect frustration before customers churn</li>
            <li>Real-time coaching improves agent performance</li>
            <li>Emotion trends reveal systemic CX issues</li>
            <li>Data-driven CX improvement</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$499/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$1,499/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$4,999/mo/month</p>
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
