import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Email Intelligence | Zion Tech Group',
  description:
    'Automated email triage, response drafting, and deliverability monitoring for teams that want faster, safer inbox operations.',
  alternates: { canonical: 'https://ziontechgroup.com/services/ai-email-intelligence/' },
};

export default function AiEmailIntelligencePage() {
  return (
    <div>
      <div className="container">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="breadcrumb-sep">/</span>
          <Link href="/services">Services</Link>
          <span className="breadcrumb-sep">/</span>
          <span>AI Email Intelligence</span>
        </div>

        <div className="service-hero">
          <h1>AI Email Intelligence</h1>
          <p className="lead">
            Turn inbox noise into structured action. AI reads, classifies, prioritizes,
            and drafts responses so support, sales, and operations move faster.
          </p>
          <div className="cta-row">
            <a className="btn primary" href="https://calendly.com/kleber-ziontechgroup">Book a call</a>
            <a className="btn secondary" href="tel:+13024640950">Call now</a>
            <Link className="btn ghost" href="/services">All services</Link>
          </div>
        </div>

        <section>
          <h2>What you get</h2>
          <ul className="checklist">
            <li>Inbound classification with ownership and urgency scoring</li>
            <li>Drafted replies matched to tone, policy, and language</li>
            <li>Deliverability recovery for bounces, spam hits, and thread leaks</li>
            <li>Metrics: response time, resolution rate, and false-alert reduction</li>
          </ul>
        </section>

        <section>
          <h2>Why Zion Tech Group</h2>
          <p>
            We run email-automation systems in production, not demos. This service
            is built from live Gmail workflow hardening, not a template.
          </p>
        </section>

        <section>
          <h2>Start fast</h2>
          <p>
            Contact us for a short discovery call, or explore our free tools to see
            AI-assisted workflow patterns in action.
          </p>
          <div className="cta-row">
            <Link className="btn primary" href="/contact">Contact us</Link>
            <Link className="btn secondary" href="/tools">Free AI tools</Link>
            <a className="btn ghost" href="https://calendly.com/kleber-ziontechgroup">Calendar</a>
          </div>
        </section>
      </div>
    </div>
  );
}
