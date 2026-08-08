import { } from 'next/navigation';

export const metadata = {
  title: "AI Sentiment Analysis & Brand Monitoring - Zion Tech Group",
  description: "Real-time brand perception tracking across social media, reviews, news, and forums. Understand customer emotion at scale and act on insights before they become ",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-sentiment-analysis`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">AI Sentiment Analysis &amp; Brand Monitoring</h1>
        <p className="text-lg text-gray-300 mb-8">Real-time brand perception tracking across social media, reviews, news, and forums. Understand customer emotion at scale and act on insights before they become crises.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Multi-platform social listening (X, Reddit, TikTok, news)</li>
            <li>Emotion-level sentiment scoring (joy, anger, fear, trust)</li>
            <li>Brand mention clustering &amp; trending topic detection</li>
            <li>Influencer identification &amp; partnership scoring</li>
            <li>Crisis early-warning system with alert triage</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Identify PR crises 2-3 days before mainstream pickup</li>
            <li>Quantify brand health with actionable metrics</li>
            <li>Discover micro-influencers in your niche organically</li>
            <li>Competitor sentiment intelligence for positioning</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$349</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$799</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$1899</p>
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
