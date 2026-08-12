import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Free Consultation | Zion Tech Group',
  description: 'Book a free AI strategy consultation with Zion Tech Group experts.',
  alternates: { canonical: '/free-consultation/' },

  openGraph: {
    title: 'Free Consultation | Zion Tech Group',
    description: 'Book a free AI strategy consultation with Zion Tech Group experts.',
    url: 'https://ziontechgroup.com/free-consultation/',
    siteName: 'Zion Tech Group',
    type: 'website',
    images: ['/og-default.png'],
  },
};

export default function FreeConsultationPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

    <JsonLd data={{@context: "https://schema.org", @type: "WebPage", name: "Free Consultation | Zion Tech Group", description: "Book a free AI strategy consultation with Zion Tech Group experts.", url: "https://ziontechgroup.com/free-consultation/"}} />
      <Navigation />
      <main className="py-20">
        <div className="container-page">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Free Consultation</h1>
          <p className="text-slate-400 text-lg max-w-2xl mb-10">
            Get a personalized AI and IT strategy session with our team.
          </p>
          <div className="glass-card p-6 mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">What we’ll cover</h2>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li>AI opportunity mapping</li>
              <li>Implementation roadmap</li>
              <li>ROI estimate and timeline</li>
              <li>Compliance and security alignment</li>
            </ul>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/contact/" className="btn-primary">Book Consultation</Link>
            <Link href="/services/" className="btn-secondary">Browse Services</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
