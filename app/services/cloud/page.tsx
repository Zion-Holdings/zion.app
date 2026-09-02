export const metadata = {
  title: 'Cloud & DevOps',
  description: 'Cloud migration, Kubernetes, CI/CD, observability, and FinOps from Zion Tech Group.',
};

export default function Page() {
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1rem' }}>
      <h1>Cloud & DevOps</h1>
      <p style={{ color: '#cbd5e1', lineHeight: 1.7 }}>
        AWS, Azure, and GCP migrations with cost controls, platform engineering, and 24/7 operations.
      </p>
      <ul style={{ color: '#cbd5e1', lineHeight: 1.9 }}>
        <li>Zero-downtime migrations</li>
        <li>Kubernetes, Terraform, and CI/CD</li>
        <li>Observability and incident response</li>
        <li>FinOps and cloud cost reduction</li>
      </ul>
      <p>
        <a href="/cloud-migration-services/">Cloud migration</a> · <a href="/book/">Book Discovery</a> ·{' '}
        <a href="/pricing/">Pricing from $8,000</a>
      </p>
    </main>
  );
}
