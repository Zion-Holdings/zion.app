import Link from 'next/link';

export const metadata = { title: 'Community', description: 'Join the Zion Tech Group community. Connect with AI and IT professionals, share knowledge, and collaborate.' };

export default function CommunityPage() {
  return (
    <div className="relative overflow-hidden">
      <section className="relative overflow-hidden border-b border-purple-500/20 bg-gradient-to-b from-slate-950 via-purple-950/30 to-slate-900">
        <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-24 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-purple-400">Community</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Join Our Community</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Connect with AI and IT professionals, share knowledge, and collaborate on projects that matter.
          </p>
        </div>
      </section>
      <section className="bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { emoji: '💬', title: 'Discord Community', desc: 'Join our Discord server for real-time discussions, Q&A, and networking.', href: '#' },
              { emoji: '📧', title: 'Newsletter', desc: 'Weekly AI and IT insights delivered to your inbox. No spam, just value.', href: '/newsletter' },
              { emoji: '🎓', title: 'AI Training Academy', desc: 'Free courses on AI, machine learning, cloud, and cybersecurity.', href: '/training' },
              { emoji: '📝', title: 'Blog & Resources', desc: 'Articles, guides, and case studies on AI and IT transformation.', href: '/blog' },
              { emoji: '🤝', title: 'Partnership Program', desc: 'Join our partner network for co-marketing, referrals, and revenue sharing.', href: '/partners' },
              { emoji: '⭐', title: 'Testimonials', desc: 'See what our clients say about working with Zion Tech Group.', href: '/testimonials' },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
                <span className="text-3xl">{item.emoji}</span>
                <h3 className="mt-3 text-lg font-semibold text-white group-hover:text-purple-300">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{item.desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-12 rounded-2xl border border-purple-500/20 bg-gradient-to-r from-purple-900/30 to-pink-900/20 p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Get in Touch</h2>
            <p className="text-slate-300 mb-6">Questions? Ideas? We'd love to hear from you.</p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-sm font-semibold text-white">Contact Us</Link>
              <Link href="/consultation" className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 hover:border-purple-400">Book a Call</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
