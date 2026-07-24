import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Smart Global Campaign | Zion Tech Group',
  description:
    'AI-driven global outreach, account research, and conversion automation for IT and AI partnership growth.',
  alternates: { canonical: 'https://ziontechgroup.com/services/ai-smart-global-campaign/' },
};

export default function Page() {
  return (
    <div>
      <div className="container">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="breadcrumb-sep">/</span>
          <Link href="/services">Services</Link>
          <span className="breadcrumb-sep">/</span>
          <span>AI Smart Global Campaign</span>
        </div>

        <div className="service-hero">
          <h1>AI Smart Global Campaign</h1>
          <p className="lead">
            High-signal outbound at scale without generic spam. AI-driven research,
            personalized outreach, and CRM follow-up so your team talks to the right
            decision-makers in the right language.
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
            <li>Targeted global lead research for AI/IT accounts</li>
            <li>Personalized outreach bodies by role, region, and business fit</li>
            <li>Follow-up rhythm that avoids duplicate or irrelevant threads</li>
            <li>Conversion handoff to proposals, demos, or SOW conversations</li>
          </ul>
        </section>

        <section>
          <h2>Why Zion Tech Group</h2>
          <p>
            This model is already used to run our own high-frequency pipeline.
            We do not sell hypothetical campaigns; we sell the system that
            keeps our pipeline healthy.
          </p>
        </section>

        <section>
          <h2>Start fast</h2>
          <p>
            Use the contact form, schedule a strategy call, or visit our free
            tools for an instant look at what AI automation can do for your
            pipeline.
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
