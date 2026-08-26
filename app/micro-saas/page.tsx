import type { Metadata } from 'next';

export const metadata = {
  title: 'Micro-SaaS Services | Zion Tech Group',
  description: 'Micro-SaaS solutions — appointment schedulers, CRMs, invoice tools, analytics dashboards, and more.',

};

export default function MicroSaasPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#020617' }}>
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>Redirecting to Micro-SaaS Services...</p>
        <meta httpEquiv="refresh" content="0;url=/services/?category=micro-saas" />
        <script dangerouslySetInnerHTML={{ __html: `window.location.replace('/services/?category=micro-saas');` }} />
        <p style={{ marginTop: '1rem' }}>
          <a href="/services/?category=micro-saas" style={{ color: '#a78bfa', textDecoration: 'underline' }}>
            Click here if not redirected
          </a>
        </p>
      </div>
    </main>
  );
}
