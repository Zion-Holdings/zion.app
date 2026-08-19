import Link from 'next/link';
import JsonLd from '@/components/JsonLd';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbSchemaProps {
  /** Auto-derived from pathname if omitted */
  items?: BreadcrumbItem[];
  /** URL path (e.g. "/services/ai-analytics-platform") — used for auto-derivation */
  path?: string;
  /** Page title for the final crumb */
  title?: string;
  /** Show rendered breadcrumb nav (default true) */
  showNav?: boolean;
  className?: string;
}

/**
 * Auto-generates JSON-LD Breadcrumb Schema from a URL path.
 * Falls back to "Home > Category > Page Title" hierarchy.
 * When items are explicitly passed, uses those instead of auto-derivation.
 */
export default function BreadcrumbSchema({
  items,
  path,
  title,
  showNav = true,
  className = '',
}: BreadcrumbSchemaProps) {
  // Auto-derive breadcrumb items from path if not provided
  const resolvedItems: BreadcrumbItem[] = items ?? deriveFromPath(path, title);

  // Build JSON-LD BreadcrumbList
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: resolvedItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `https://ziontechgroup.com${item.href}` } : {}),
    })),
  };

  if (!showNav && !resolvedItems.length) return null;

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      {showNav && resolvedItems.length > 0 && (
        <nav aria-label="Breadcrumb" className={`flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-6 ${className}`}>
          <ol className="flex flex-wrap items-center gap-2">
            {resolvedItems.map((item, index) => {
              const isLast = index === resolvedItems.length - 1;
              return (
                <li key={index} className="flex items-center gap-2">
                  {index > 0 && (
                    <span aria-hidden="true" className="text-slate-600">
                      /
                    </span>
                  )}
                  {isLast || !item.href ? (
                    <span
                      className="text-slate-300 font-medium"
                      aria-current={isLast ? 'page' : undefined}
                    >
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-purple-300 hover:text-purple-200 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      )}
    </>
  );
}

/**
 * Derives breadcrumb items from a URL path.
 * Examples:
 *   "/services/ai-analytics-platform" → Home > Services > AI Analytics Platform
 *   "/blog/devsecops-pipeline" → Home > Blog > DevSecOps Pipeline
 *   "/about" → Home > About
 */
function deriveFromPath(path: string | undefined, title?: string): BreadcrumbItem[] {
  if (!path) return [];

  const segments = path.split('/').filter((s) => s.length > 0);

  const items: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
  ];

  // Reconstruct path incrementally
  let accumulatedPath = '';

  segments.forEach((segment, index) => {
    accumulatedPath += `/${segment}`;
    const isLast = index === segments.length - 1;

    // Use title for last segment if provided
    if (isLast && title) {
      items.push({ label: title });
    } else if (isLast) {
      // Try to prettify slug
      items.push({
        label: prettifySlug(segment),
        href: accumulatedPath,
      });
    } else {
      // Category/section segments
      const label = prettifySegment(segment);
      // Don't add href on last segment if we'll use title
      items.push({ label, href: accumulatedPath });
    }
  });

  // If we used title for last segment, remove the href-less version
  // and add it properly (the last item should not have href in the nav but should in schema)
  if (title && items.length > 1) {
    const lastItem = items[items.length - 1];
    // For the schema, include href on last item (self-referencing is valid)
    // For the nav, last item stays as span
    // This is handled by the isLast check above
  }

  return items;
}

function prettifySlug(slug: string): string {
  return slug
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' ')
    .replace(/\b\d{4}[a-f0-9-]*$/, ''); // Strip trailing hash suffixes
}

function prettifySegment(segment: string): string {
  const label = segment.charAt(0).toUpperCase() + segment.slice(1);
  const map: Record<string, string> = {
    services: 'Services',
    blog: 'Blog',
    tools: 'Tools',
    products: 'Products',
    solutions: 'Solutions',
    'ai-services': 'AI Services',
    'agents-monitoring': 'AI Agents',
    use: 'Use Cases',
    'use-cases': 'Use Cases',
    about: 'About',
    contact: 'Contact',
    faq: 'FAQ',
    privacy: 'Privacy',
    terms: 'Terms',
  };
  return map[segment] || label;
}
