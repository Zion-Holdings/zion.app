import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI Emotion Recognition Platform - Zion Tech Group",
  description: "Real-time emotion and sentiment analysis from facial expressions, voice tone, and text. Used for customer experience optimization, market research, and mental health screening. GDPR-compliant with on-device processing option.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-emotion-recognition-platform`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/ai-emotion-recognition-platform`} title="AI Emotion Recognition Platform" />
        <h1 className="text-4xl font-bold mb-6">😊 AI Emotion Recognition Platform</h1>
        <p className="text-lg text-gray-300 mb-8">Real-time emotion and sentiment analysis from facial expressions, voice tone, and text. Used for customer experience optimization, market research, and mental health screening. GDPR-compliant with on-device processing option.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Facial emotion detection (7 basic emotions)</li>
            <li>Voice tone and prosody analysis</li>
            <li>Text sentiment and emotion detection</li>
            <li>Real-time streaming API</li>
            <li>On-device processing for privacy</li>
            <li>Emotion timeline visualization</li>
            <li>Demographic-aware analysis</li>
            <li>Integration with video conferencing tools</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Understand customer emotions in real-time</li>
            <li>Improve product experience with emotional data</li>
            <li>Mental health screening support</li>
            <li>Privacy-first architecture</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$799/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$2,499/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$Custom/month</p>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <Link href="/services/" className="text-purple-300 hover:text-purple-200">← Back to All Services</Link>
          <Link href="/tools/" className="text-slate-400 hover:text-slate-300">Try our free tools →</Link>
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
