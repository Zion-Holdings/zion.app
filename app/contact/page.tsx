export const metadata = {
  title: 'Contact Zion Tech Group | AI & IT Services',
  description: 'Talk to Zion Tech Group about AI, cybersecurity, managed IT, and cloud solutions. Calendly, phone, and WhatsApp options available.',
  alternates: { canonical: 'https://ziontechgroup.com/contact/' },
  openGraph: { title: 'Contact Zion Tech Group', description: 'AI and IT services contact.', url: 'https://ziontechgroup.com/contact/' }
};

export default function ContactPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Contact Zion Tech Group</h1>
      <p className="mb-6 text-slate-300">Tell us about your environment and timeline. We respond fast.</p>
      <div className="grid gap-4 md:grid-cols-3">
        <a href="https://calendly.com/kleber-ziontechgroup" className="block rounded-lg border border-slate-800 p-4 hover:border-purple-500/60">Calendly</a>
        <a href="tel:+13092688281" className="block rounded-lg border border-slate-800 p-4 hover:border-purple-500/60">Call</a>
        <a href="https://wa.me/13092688281" className="block rounded-lg border border-slate-800 p-4 hover:border-purple-500/60">WhatsApp</a>
      </div>
    </main>
  );
}
