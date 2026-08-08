import { } from 'next/navigation';

export const metadata = {
  title: "AI Voice Cloning & Synthesis - Zion Tech Group",
  description: "Clone any voice with 30 seconds of audio for voiceovers, podcasts, audiobooks, and interactive voice applications.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-voice-cloning`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">AI Voice Cloning &amp; Synthesis</h1>
        <p className="text-lg text-gray-300 mb-8">Clone any voice with 30 seconds of audio for voiceovers, podcasts, audiobooks, and interactive voice applications.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Voice cloning from 30s audio sample</li>
            <li>Emotion and tone control — adjust pitch, rate, emphasis</li>
            <li>Real-time audio streaming for voice assistants</li>
            <li>Multi-speaker conversation generation</li>
            <li>Studio-quality audio with noise reduction</li>
            <li>Ethical consent tracking and ownership verification</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Studio-quality from 30 seconds of audio</li>
            <li>50+ languages and dialects</li>
            <li>Real-time streaming capability</li>
            <li>Reduce voice talent costs by 80%</li>
            <li>Ethical consent management</li>
            <li>Custom emotion and tone controls</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$79</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$249</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$599</p>
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
