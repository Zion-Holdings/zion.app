// app/community/page.tsx
'use client';
import Link from 'next/link';
import type { Metadata } from 'next';
import PageTemplate from '@/components/PageTemplate';

export const metadata: Metadata = {
  title: 'Community | Zion Tech Group',
  description: 'Join the Zion Tech Group community. Connect with AI and IT professionals, share knowledge, and collaborate.',
  alternates: { canonical: '/community' },
};

const COMMUNITY_LINKS = [
  { emoji: '💬', title: 'Discord Community', desc: 'Join our Discord server for real-time discussions, Q&A, and networking.', href: '#' },
  { emoji: '📧', title: 'Newsletter', desc: 'Weekly AI and IT insights delivered to your inbox. No spam, just value.', href: '/newsletter' },
  { emoji: '🎓', title: 'AI Training Academy', desc: 'Free courses on AI, machine learning, cloud, and cybersecurity.', href: '/academy' },
  { emoji: '📝', title: 'Blog & Resources', desc: 'Articles, guides, and case studies on AI and IT transformation.', href: '/blog' },
  { emoji: '🤝', title: 'Partnership Program', desc: 'Join our partner network for co-marketing, referrals, and revenue sharing.', href: '/partners' },
  { emoji: '⭐', title: 'Testimonials', desc: 'See what our clients say about working with Zion Tech Group.', href: '/testimonials' },
];

export default function CommunityPage() {
  return (
    <PageTemplate
      title="Join Our Community"
      description="Connect with AI and IT professionals, share knowledge, and collaborate on projects that matter."
      category="Community"
      heroIcon="👥"
      actions={[
        { label: 'Contact Us', href: '/contact', style: 'primary' },
        { label: 'Book a Call', href: 'https://calendly.com/kleber-ziontechgroup', style: 'secondary', external: true },
      ]}
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Community', href: '/community' },
      ]}
      layout="hero"
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COMMUNITY_LINKS.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="glass-card group flex flex-col text-center p-6 hover:border-purple-500/40 transition-all duration-300"
            >
              <span className="text-3xl mb-3">{item.emoji}</span>
              <h3 className="mt-2 text-lg font-semibold text-white group-hover:text-purple-300 transition">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-400 flex-1">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}