import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI Voice Cloning & Localization Platform - Zion Tech Group",
  description: "Clone any voice from 30 seconds of audio. Generate localized voiceovers in 40+ languages with preserved accent and emotion. TTS for audiobooks, ads, and IVR systems.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-voice-cloner`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/ai-voice-cloner`} title="AI Voice Cloning & Localization Platform" />
        <h1 className="text-4xl font-bold mb-6">🎤 AI Voice Cloning & Localization Platform</h1>
        <p className="text-lg text-gray-300 mb-8">Clone any voice from 30 seconds of audio. Generate localized voiceovers in 40+ languages with preserved accent and emotion. TTS for audiobooks, ads, and IVR systems.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>30-second voice cloning</li>
            <li>40+ language localization</li>
            <li>Emotion & accent preservation</li>
            <li>Audiobook production pipeline</li>
            <li>Advertising voice generation</li>
            <li>IVR voice system import</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Clone any voice instantly</li>
            <li>Localize content in 40+ languages</li>
            <li>Preserve speaker emotion perfectly</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$49/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$149/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$499/month</p>
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
