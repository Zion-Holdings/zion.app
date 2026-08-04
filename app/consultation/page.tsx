import Link from 'next/link';

export const metadata = {
  title: 'Free Consultation | Zion Tech Group',
  description: 'Book a free 30-minute consultation with our AI/IT experts.',
};

export default function ConsultationPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <h1 className="text-3xl font-bold text-white mb-4">Free Consultation</h1>
        <p className="text-slate-400 mb-6">Get a free 30-minute consultation with our AI/IT experts.</p>
        <div className="glass-card p-6">
          <p className="text-slate-300">We will review your needs and propose a tailored roadmap.</p>
          <div className="mt-4 flex gap-3">
            <Link href="/contact/" className="btn-primary">Book Now</Link>
            <Link href="/services/" className="btn-secondary">View Services</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
