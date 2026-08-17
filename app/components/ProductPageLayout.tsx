'use client';

import PageShell from '@/components/PageShell';
import PageTemplate from '@/components/PageTemplate';

export interface ProductPageLayoutData {
  title: string;
  category?: string;
  description?: string;
  iconEmoji?: React.ReactNode;
  features?: Array<{ title: string; description: string }>;
  useCases?: Array<{ title: string; description: string; icon?: string }>;
  benefits?: string[];
  ctaLabel?: string;
}

interface ProductPageLayoutProps {
  data: ProductPageLayoutData;
}

export default function ProductPageLayout({ data }: ProductPageLayoutProps) {
  return (
    <PageShell>
      <PageTemplate
        title={data.title}
        subtitle={data.description}
        breadcrumbItems={
          data.category
            ? [
                { label: 'Home', href: '/' },
                { label: data.category, href: '/services/' },
                { label: data.title },
              ]
            : [
                { label: 'Home', href: '/' },
                { label: data.title },
              ]
        }
        layout="hero"
        actions={
          data.ctaLabel
            ? [{ label: data.ctaLabel, href: '/contact/', style: 'primary' }]
            : undefined
        }
      >
        {data.useCases && data.useCases.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Use Cases</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {data.useCases.map((uc, i) => (
                <div key={i} className="glass-card">
                  {uc.icon && <span className="text-3xl mb-3 block">{uc.icon}</span>}
                  <h3 className="text-lg font-semibold text-white mb-2">{uc.title}</h3>
                  <p className="text-slate-400 text-sm">{uc.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {data.benefits && data.benefits.length > 0 && (
          <div className="mb-16 glass-card p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Benefits</h2>
            <ul className="space-y-3">
              {data.benefits.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300">
                  <span className="text-purple-400 mt-1 shrink-0">✓</span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {data.features && data.features.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.features.map((f, i) => (
                <div key={i} className="glass-card">
                  <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                  <p className="text-slate-400 text-sm">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </PageTemplate>
    </PageShell>
  );
}
