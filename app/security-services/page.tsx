import type { Metadata } from 'next';

export const metadata = {
  title: 'Security Services | Zion Tech Group',
  description: 'Enterprise cybersecurity services — threat detection, zero trust, compliance, and security monitoring.',

};

export default function SecurityServicesPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#020617' }}>
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>Redirecting to Security Services...</p>
        <meta httpEquiv="refresh" content="0;url=/services/?category=security" />
        <script dangerouslySetInnerHTML={{ __html: `window.location.replace('/services/?category=security');` }} />
        <p style={{ marginTop: '1rem' }}>
          <a href="/services/?category=security" style={{ color: '#a78bfa', textDecoration: 'underline' }}>
            Click here if not redirected
          </a>
        </p>
      </div>
    </main>
  );
}
