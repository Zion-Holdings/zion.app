import type { Metadata } from 'next';

export const metadata = {
  title: 'DevOps Services | Zion Tech Group',
  description: 'DevOps services — CI/CD, infrastructure as code, containerization, and deployment automation.',

};

export default function DevopsServicesPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#020617' }}>
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>Redirecting to DevOps Services...</p>
        <meta httpEquiv="refresh" content="0;url=/services/?category=devops" />
        <script dangerouslySetInnerHTML={{ __html: `window.location.replace('/services/?category=devops');` }} />
        <p style={{ marginTop: '1rem' }}>
          <a href="/services/?category=devops" style={{ color: '#a78bfa', textDecoration: 'underline' }}>
            Click here if not redirected
          </a>
        </p>
      </div>
    </main>
  );
}
