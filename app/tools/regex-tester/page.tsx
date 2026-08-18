import StandardPage from '@/components/StandardPage';

export const metadata = {
  title: 'Regex Tester — Zion Tech Group',
  description: 'Test regular expressions with live matching, highlighting, and quick reference for common patterns.',
  alternates: { canonical: '/tools/regex-tester/' },
  robots: { index: true, follow: true },
};

export default function RegexTesterPage() {
  const breadcrumbItems = [
    { label: 'Tools', href: '/tools/' },
    { label: 'Regex Tester' },
  ];

  return (
    <StandardPage
      title="Regex Tester"
      subtitle="Test regular expressions with live matching and highlights."
      breadcrumbItems={breadcrumbItems}
      actions={[
        { label: 'Browse all tools', href: '/tools/', style: 'primary' },
        { label: 'Talk to us', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="glass-card">
          <h3 className="text-white font-semibold mb-2">Live matching</h3>
          <p className="text-slate-400 text-sm">Test patterns against sample text with immediate match feedback.</p>
        </div>
        <div className="glass-card">
          <h3 className="text-white font-semibold mb-2">Capture groups</h3>
          <p className="text-slate-400 text-sm">Inspect groups and reuse extracted values in development workflows.</p>
        </div>
        <div className="glass-card">
          <h3 className="text-white font-semibold mb-2">Common patterns</h3>
          <p className="text-slate-400 text-sm">Use quick templates for emails, URLs, dates, and identifiers.</p>
        </div>
        <div className="glass-card">
          <h3 className="text-white font-semibold mb-2">Use cases</h3>
          <p className="text-slate-400 text-sm">Form validation, log parsing, and extraction automation.</p>
        </div>
      </div>
    </StandardPage>
  );
}
