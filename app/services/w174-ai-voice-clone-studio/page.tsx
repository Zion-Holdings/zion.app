import { } from 'next/navigation';

export const metadata = {
  title: "AI Voice Clone Studio - Zion Tech Group",
  description: "Professional voice cloning and text-to-speech with 30-second sample creation. 50+ languages, emotion control, and real-time streaming. Built-in consent manageme",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w174-ai-voice-clone-studio`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">AI Voice Clone Studio</h1>
        <p className="text-lg text-gray-300 mb-8">Professional voice cloning and text-to-speech with 30-second sample creation. 50+ languages, emotion control, and real-time streaming. Built-in consent management and watermarking.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Voice cloning from 30-second audio sample</li>
            <li>50+ language support with accent control</li>
            <li>Emotion and speaking style adjustment</li>
            <li>Real-time streaming TTS (&lt; 200ms first byte)</li>
            <li>Consent and licensing management</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Clone any voice from just 30 seconds of audio</li>
            <li>Real-time streaming for live applications</li>
            <li>Consent management ensures ethical use</li>
            <li>Watermarking prevents misuse</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$149/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$449/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$1,499/mo/month</p>
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
