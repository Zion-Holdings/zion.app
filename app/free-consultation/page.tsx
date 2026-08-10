import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Consultation | Zion Tech Group',
  description: 'Book a free AI strategy consultation with Zion Tech Group experts.',
  alternates: { canonical: '/free-consultation/' },
};

export default function FreeConsultationPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Free Consultation</h1>
        <p className="text-slate-400 text-lg max-w-2xl mb-10">
          Get a personalized AI and IT strategy session with our team.
        </p>
        <div className="glass-card p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">What we’ll cover</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-2">
            <li>AI opportunity mapping</li>
            <li>Implementation roadmap</li>
            <li>ROI estimate and timeline</li>
            <li>Compliance and security alignment</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
