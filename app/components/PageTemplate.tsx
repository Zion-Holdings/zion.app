import React from 'react';

interface PageTemplateProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  breadcrumbItems?: Array<{ label: string; href?: string }>;
  layout?: 'hero' | 'centered' | 'product' | 'tool';
  actions?: Array<{ label: string; href: string; style?: 'primary' | 'secondary' }>;
  children: React.ReactNode;
}

export default function PageTemplate({
  title,
  subtitle,
  breadcrumbItems = [],
  layout = 'hero',
  actions = [],
  children,
}: PageTemplateProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {breadcrumbItems.length > 0 && (
        <nav className="mb-8 text-sm text-slate-400">
          {breadcrumbItems.map((item, idx) => (
            <span key={idx}>
              {idx > 0 && <span className="mx-2">/</span>}
              {item.href ? <a href={item.href} className="hover:text-purple-400 transition">{item.label}</a> : item.label}
            </span>
          ))}
        </nav>
      )}

      {layout === 'hero' && (
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          {subtitle && <p className="text-xl text-slate-300 leading-relaxed mb-6">{subtitle}</p>}
          {actions.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {actions.map((action, idx) => (
                <a key={idx} href={action.href} className={`${action.style === 'secondary' ? 'btn-secondary' : 'btn-primary'} text-lg px-10 py-4 inline-block`}>
                  {action.label}
                </a>
              ))}
            </div>
          )}
        </div>
      )}

      {layout !== 'hero' && (
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          {subtitle && <p className="text-xl text-slate-300 leading-relaxed mb-6">{subtitle}</p>}
          {actions.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4">
              {actions.map((action, idx) => (
                <a key={idx} href={action.href} className={`${action.style === 'secondary' ? 'btn-secondary' : 'btn-primary'} text-lg px-10 py-4 inline-block`}>
                  {action.label}
                </a>
              ))}
            </div>
          )}
        </div>
      )}

      <div>{children}</div>
    </div>
  );
}
