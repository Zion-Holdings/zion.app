import { SITE } from '../lib/site';

export const metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Zion Tech Group AI services, pricing, integrations, and deployment.',
};

const faqs = [
  ['What does Zion Tech Group build?', 'AI agents, automation platforms, cloud and security programs, and revenue infrastructure for B2B teams.'],
  ['Do you work with startups or enterprise?', 'Both. Starter packages fit early-stage teams; custom work scales to regulated enterprises.'],
  ['How fast can you deploy?', 'Most MVPs ship in 2–4 weeks. Full production systems typically take 6–8 weeks depending on integrations.'],
  ['What is the pricing model?', 'Discovery $99, Starter $2,500/project, Growth $8,000/month, Enterprise custom. See /pricing/.'],
  ['Do you accept Stripe?', 'Yes. Discovery can be paid on Stripe. Project invoices also go through Stripe.'],
  ['What integrations do you support?', 'Stripe, HubSpot, Notion, Slack, Resend, Brevo, Calendly, WhatsApp, GitHub, Google Workspace, and 30+ live Composio apps.'],
];

export default function Page() {
  return (
    <main style={{ maxWidth: 820, margin: '0 auto', padding: '2rem 1rem' }}>
      <h1>Frequently asked questions</h1>
      {faqs.map(([q, a]) => (
        <details key={q} style={{ background: 'rgba(15,23,42,0.65)', padding: 16, margin: '12px 0', borderRadius: 12, border: '1px solid #334155' }}>
          <summary style={{ fontWeight: 700 }}>{q}</summary>
          <p style={{ color: '#cbd5e1', lineHeight: 1.7 }}>{a}</p>
        </details>
      ))}
      <p style={{ marginTop: 24 }}>
        <a href="/book/">Book Discovery</a> · <a href={SITE.stripeDiscovery}>Pay $99</a>
      </p>
    </main>
  );
}
