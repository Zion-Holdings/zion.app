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
      ]}
    >
      <p>Validate patterns against sample text, inspect capture groups, and save reusable regex snippets for development workflows.</p>
    </StandardPage>
  );
}
