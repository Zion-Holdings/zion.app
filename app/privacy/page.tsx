import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Zion Tech Group',
  alternates: { canonical: '/privacy' },
};


export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-3 text-white">Privacy Policy</h1>
        <p className="text-slate-400 mb-8">
          This privacy policy describes how Zion Tech Group collects, uses, and protects your personal information.
          If you have questions, contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:underline">kleber@ziontechgroup.com</a>.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-3">1. Information We Collect</h2>
          <p className="text-slate-300 mb-2">
            We may collect contact details, usage data, service preferences, and communications you send to us.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-3">2. How We Use Information</h2>
          <p className="text-slate-300 mb-2">
            We use information to provide services, improve the website, communicate with you, and comply with legal obligations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-3">3. Data Sharing</h2>
          <p className="text-slate-300 mb-2">
            We do not sell personal data. We may share information with trusted service providers and when required by law.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-3">4. Your Rights</h2>
          <p className="text-slate-300 mb-2">
            You may request access, correction, or deletion of your personal data by contacting us.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-3">5. Contact</h2>
          <div className="text-slate-300 space-y-1">
            <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:underline">kleber@ziontechgroup.com</a></p>
            <p>Phone: <a href="tel:+1-302-464-0950" className="text-purple-400 hover:underline">+1 302 464 0950</a></p>
            <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
          </div>
        </section>

        <p className="text-slate-500 text-sm">Last updated: July 7, 2026</p>
      </div>
    </main>
  );
}
