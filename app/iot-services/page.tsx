import type { Metadata } from 'next';

export const metadata = {
  title: 'IoT Services | Zion Tech Group',
  description: 'Internet of Things services — IoT platforms, device management, edge computing, and smart systems integration.',

};

export default function IotServicesPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#020617' }}>
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>Redirecting to IoT Services...</p>
        <meta httpEquiv="refresh" content="0;url=/services/?category=iot" />
        <script dangerouslySetInnerHTML={{ __html: `window.location.replace('/services/?category=iot');` }} />
        <p style={{ marginTop: '1rem' }}>
          <a href="/services/?category=iot" style={{ color: '#a78bfa', textDecoration: 'underline' }}>
            Click here if not redirected
          </a>
        </p>
      </div>
    </main>
  );
}
