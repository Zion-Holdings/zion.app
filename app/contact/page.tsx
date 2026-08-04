import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Zion Tech Group | AI and IT Services',
  description: 'Contact Zion Tech Group for AI, IT, cybersecurity, and cloud services. Call +1 302 464 0950 or email kleber@ziontechgroup.com.',
  alternates: { canonical: '/contact/' },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold">Contact Zion Tech Group</h1>
        <div className="mt-8 space-y-4 text-slate-300">
          <p>Phone: +1 302 464 0950</p>
          <p>Email: kleber@ziontechgroup.com</p>
          <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
          <p>
            <a href="https://calendly.com/kleber-ziontechgroup" className="btn-primary">Book a Consultation</a>
          </p>
        </div>
      </main>
    </div>
  );
}
