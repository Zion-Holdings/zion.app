import { ReactNode } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
  breadcrumb?: { label: string; href?: string }[];
  pt?: string;
  pb?: string;
}

/**
 * Standard page wrapper that ensures consistent:
 * - min-height and background
 * - container width (container-page)
 * - padding (py-20 default)
 * - breadcrumb navigation
 * 
 * All content pages should use this wrapper for layout consistency.
 */
export default function PageWrapper({
  children,
  className = '',
  breadcrumb,
  pt = 'pt-20',
  pb = 'pb-20',
}: PageWrapperProps) {
  return (
    <main className={`min-h-screen bg-slate-950 ${pt} ${pb}`}>
      <div className="container-page">
        {breadcrumb && (
          <Breadcrumb items={breadcrumb} className="mb-8" />
        )}
        <div className={className}>
          {children}
        </div>
      </div>
    </main>
  );
}
