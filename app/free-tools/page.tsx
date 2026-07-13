'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function FreeToolsPage() {
  return (
    <main style={styles.main}>
      <h1 style={styles.h1}>Free Services & Tools</h1>
      <p style={styles.p}>
        Explore a curated set of AI and IT guides, scripts, health-check monitors,
        and readiness kits you can use right away — no sign-up required.
      </p>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <strong>Free IT Automation Scripts</strong> — quick-start workflows for support, monitoring, and triage.
        </li>
        <li style={styles.li}>
          <strong>IT Health Check & Monitoring Tools</strong> — baseline system checks and alerting templates.
        </li>
        <li style={styles.li}>
          <strong>AI Readiness Audit for IT Managers</strong> — a step-by-step checklist to assess your stack.
        </li>
        <li style={styles.li}>
          <strong>Free AI Tools for IT Support & MSPs</strong> — practical tools to accelerate ticket resolution.
        </li>
      </ul>

      <p style={{ ...styles.p, marginTop: 24 }}>
        We also offer paid implementation, custom automation, and managed services.
        Book a free consultation with our CEO to discuss your needs:
        {' '}
        <Link href="/contact" style={styles.link}>Schedule here</Link>.
      </p>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  main: {
    maxWidth: 980,
    margin: '0 auto',
    padding: '48px 24px',
    color: '#111827',
  },
  h1: {
    fontSize: '2.2rem',
    fontWeight: 700,
    marginBottom: 16,
  },
  p: {
    fontSize: '1.05rem',
    lineHeight: 1.7,
    color: '#374151',
  },
  ul: {
    marginTop: 20,
    paddingLeft: 28,
    lineHeight: 1.9,
    color: '#1f2937',
  },
  li: {
    marginBottom: 8,
  },
  link: {
    color: '#2563eb',
    textDecoration: 'underline',
  },
};
