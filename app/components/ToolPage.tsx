// app/components/ToolPage.tsx — Template for free tool pages
// Delegates to PageTemplate with layout="tool" for consistent hero + breadcrumb + content
import PageTemplate, { PageAction } from '@/components/PageTemplate';

export interface ToolPageProps {
  title: string;
  description: string;
  canonical?: string;
  breadcrumbItems?: Array<{ label: string; href?: string }>;
  actions?: PageAction[];
  children: React.ReactNode;
}

/**
 * ToolPage — PageTemplate wrapper optimized for free tools & calculators.
 * Provides consistent hero + breadcrumb + content layout.
 */
export default function ToolPage({
  title,
  description,
  canonical,
  breadcrumbItems,
  actions,
  children,
}: ToolPageProps) {
  return (
    <PageTemplate
      title={title}
      description={description}
      canonical={canonical}
      layout="tool"
      subtitle={description}
      actions={actions}
      breadcrumbItems={breadcrumbItems || [
        { label: 'Home', href: '/' },
        { label: 'Free Tools', href: '/tools/' },
        { label: title },
      ]}
    >
      {children}
    </PageTemplate>
  );
}
