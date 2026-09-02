type Crumb = { label: string; href?: string };

export default function StandardPage({
  title,
  subtitle,
  breadcrumbItems = [],
  children,
}: {
  title: string;
  subtitle?: string;
  breadcrumbItems?: Crumb[];
  children?: import('react').ReactNode;
}) {
  return (
    <main style={{ maxWidth: 960, margin: '0 auto', padding: '2rem 1rem' }}>
      {breadcrumbItems.length > 0 && (
        <nav style={{ marginBottom: 16, color: '#94a3b8', fontSize: 14 }}>
          {breadcrumbItems.map((item, i) => (
            <span key={`${item.label}-${i}`}>
              {i > 0 && ' / '}
              {item.href ? <a href={item.href}>{item.label}</a> : item.label}
            </span>
          ))}
        </nav>
      )}
      <h1 style={{ marginBottom: 12 }}>{title}</h1>
      {subtitle && <p style={{ color: '#cbd5e1', fontSize: 18, lineHeight: 1.7 }}>{subtitle}</p>}
      <div style={{ marginTop: 24 }}>{children}</div>
    </main>
  );
}
