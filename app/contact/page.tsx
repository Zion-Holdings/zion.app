import type { Metadata } from 'next';
import PageTemplate from '@/components/PageTemplate';

export const metadata: Metadata = {
  title: 'Contact Zion Tech Group | AI & IT Services',
  description: 'Contact Zion Tech Group for AI implementation, IT support, cloud automation, and managed technology solutions. Request a proposal, schedule a consultation, or call us directly.',
  openGraph: {
    title: 'Contact Zion Tech Group',
    description: 'Contact Zion Tech Group for AI implementation, IT support, cloud automation, and managed technology solutions.',
    url: 'https://ziontechgroup.com/contact/',
    type: 'website',
  },
  alternates: { canonical: 'https://ziontechgroup.com/contact/' },
};

const quickActions = [
  { label: 'Request Proposal', href: 'mailto:kleber@ziontechgroup.com?subject=Proposal%20Request%20-%20Zion%20Tech%20Group', icon: '📄' },
  { label: 'Our Services', href: '/services/', icon: '🧩' },
  { label: 'Call Now', href: 'tel:+13024640950', icon: '📞' },
  { label: 'Book Consultation', href: 'https://calendly.com/kleber-ziontechgroup', icon: '📅' },
  { label: 'WhatsApp', href: 'https://wa.me/13024640950', icon: '💬' },
];

export default function ContactPage() {
  return (
    <PageTemplate
      title="Contact Zion Tech Group"
      description="Tell us about your AI, IT, or automation project. We respond fast and can start with a free consultation."
      breadcrumbItems={[{ label: 'Home', href: '/' }, { label: 'Contact', href: '/contact' }]}
      layout="centered"
      actions={[
        { label: '📅 Schedule a Call', href: 'https://calendly.com/kleber-ziontechgroup', style: 'primary', external: true },
        { label: '📞 +1 302 464 0950', href: 'tel:+13024640950', style: 'secondary' },
        { label: '✉️ Email Us', href: 'mailto:kleber@ziontechgroup.com?subject=Project%20Inquiry%20-%20Zion%20Tech%20Group', style: 'secondary' },
      ]}
    >
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4 text-center">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickActions.map(action => (
            <a
              key={action.label}
              href={action.href}
              target={action.href.startsWith('http') && !action.href.includes('ziontechgroup.com,email') && action.href.startsWith('http') ? '_blank' : undefined}
              rel={action.href.startsWith('http') ? 'noreferrer' : undefined}
              className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500/50 hover:bg-slate-800 transition-all"
            >
              <span className="text-xl shrink-0">{action.icon}</span>
              <span className="text-white font-medium">{action.label}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="cta-section text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Need an AI or IT solution this week?</h2>
        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
          We specialize in AI support, automation, cloud optimization, and managed delivery. Start with a short discovery call or request a proposal.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://calendly.com/kleber-ziontechgroup" target="_blank" rel="noreferrer" className="btn-primary text-lg">📅 Schedule a Call</a>
          <a href="tel:+13024640950" className="btn-secondary text-lg">📞 +1 302 464 0950</a>
          <a href="mailto:kleber@ziontechgroup.com?subject=Project%20Inquiry%20-%20Zion%20Tech%20Group" className="btn-secondary text-lg">✉️ Email Us</a>
        </div>
        <p className="text-slate-400 mt-6 text-sm">
          Website: <a className="text-emerald-300 hover:text-emerald-200 underline" href="https://ziontechgroup.com">https://ziontechgroup.com</a>
        </p>
      </section>
    </PageTemplate>
  );
}
