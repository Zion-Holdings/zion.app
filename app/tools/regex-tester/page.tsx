import StandardPage from '@/components/StandardPage';

export const metadata = {
  title: 'Regex Tester — Zion Tech Group',
  description: 'Test regular expressions with live matching, highlighting, and quick reference for common patterns.',
  alternates: { canonical: '/tools/regex-tester/' },
  robots: { index: true, follow: true },
};

export default function RegexTesterPage() {
  const breadcrumbs = [
    { name: 'Tools', href: '/tools/' },
    { name: 'Regex Tester', href: '/tools/regex-tester/' },
  ];

  return (
    <StandardPage
      title="Regex Tester"
      description="Test regular expressions with live matching and highlights."
      breadcrumbs={breadcrumbs}
      cta={{ label: 'Browse all tools', href: '/tools/' }}
    >
      <p>Validate patterns against sample text, inspect capture groups, and save reusable regex snippets for development workflows.</p>
    </StandardPage>
  );
}
