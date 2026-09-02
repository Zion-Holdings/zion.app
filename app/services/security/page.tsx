export const metadata = {
  title: 'Cybersecurity',
  description: 'AI-powered threat detection, managed SOC, and compliance automation from Zion Tech Group.',
};

export default function Page() {
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1rem' }}>
      <h1>Cybersecurity</h1>
      <p style={{ color: '#cbd5e1', lineHeight: 1.7 }}>
        Managed SOC, detection engineering, and compliance automation for teams that cannot staff a 24/7 security org.
      </p>
      <ul style={{ color: '#cbd5e1', lineHeight: 1.9 }}>
        <li>Managed SOC and incident response</li>
        <li>Threat detection with AI triage</li>
        <li>Compliance automation (SOC2-aligned practices)</li>
        <li>iGaming and regulated-industry hardening</li>
      </ul>
      <p>
        <a href="/managed-soc-pricing/">SOC pricing</a> · <a href="/malta-igaming-platform-security/">Malta iGaming security</a> ·{' '}
        <a href="/book/">Book Discovery</a>
      </p>
    </main>
  );
}
