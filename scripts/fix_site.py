#!/usr/bin/env python3
"""Fix invalid blog slugs, sitemap/feed, and internal links."""
import re
from pathlib import Path

REPO = Path('.').resolve()
BLOG_ROOT = REPO / 'app' / 'blog'
DOCS_ROOT = REPO / 'docs' / 'blog'
SITEMAP = REPO / 'sitemap.xml'
FEED = REPO / 'feed.xml'
BLOG_PAGE = REPO / 'app' / 'blog' / 'page.tsx'
PUBLIC_SITEMAP = REPO / 'public' / 'sitemap.xml'
DOCS_SITEMAP = REPO / 'docs' / 'sitemap.xml'

# Build valid slugs
valid_slugs = set()
for p in BLOG_ROOT.iterdir():
    if p.is_dir() and (p / 'page.tsx').exists() and p.name != '[slug]':
        valid_slugs.add(p.name)
for p in DOCS_ROOT.iterdir():
    if p.is_dir() and (p / 'index.html').exists():
        valid_slugs.add(p.name)

print(f'Valid slugs: {len(valid_slugs)}')

# Rewrite app/blog/page.tsx
posts = []
for slug in sorted(valid_slugs):
    title = slug.replace('-', ' ').replace('/', ' ').strip()
    title = re.sub(r'\s+', ' ', title)
    title = title.title()
    posts.append(f"  {{slug: '{slug}', title: '{title}'}},")

posts_block = '\n'.join(posts)
blog_page_text = """import Link from 'next/link';
import StandardPage from '@/components/StandardPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Zion Tech Group',
  description: 'AI, IT, and automation insights, guides, and industry trends from Zion Tech Group.',
  openGraph: {
    title: 'Blog | Zion Tech Group',
    description: 'AI, IT, and automation insights, guides, and industry trends from Zion Tech Group.',
    url: 'https://ziontechgroup.com/blog/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Zion Tech Group',
    description: 'AI, IT, and automation insights, guides, and industry trends from Zion Tech Group.',
  },
  alternates: { canonical: '/blog/' },
};

interface BlogPost {
  slug: string;
  title: string;
}

const posts: BlogPost[] = [
""" + posts_block + """
];

export default function BlogPage() {
  return (
    <StandardPage
      title="Blog"
      subtitle="Guides, roadmap notes, and implementation playbooks from the Zion platform."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Blog' },
      ]}
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-purple-500/40 transition-all">
            <h3 className="text-white font-semibold mb-2">{post.title}</h3>
            <span className="text-purple-300 text-xs">Read post →</span>
          </Link>
        ))}
      </div>
    </StandardPage>
  );
}
"""
BLOG_PAGE.write_text(blog_page_text, encoding='utf-8')
print('Rewrote app/blog/page.tsx')

# Rewrite sitemap.xml
def write_sitemap(path: Path, entries):
    text = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + '\n'.join(entries) + '\n</urlset>\n'
    path.write_text(text, encoding='utf-8')

sitemap_entries = []
for slug in sorted(valid_slugs):
    sitemap_entries.append(f'  <url><loc>https://ziontechgroup.com/blog/{slug}/</loc><changefreq>weekly</changefreq><priority>0.6</priority></url>')

raw_routes = set()
for p in (REPO / 'app').glob('**/page.tsx'):
    rel = p.relative_to(REPO / 'app')
    parts = rel.parts
    if 'blog' in parts:
        continue
    if '[slug]' in parts:
        continue
    if 'page.tsx' in parts and len(parts) == 1:
        route = '/'
    else:
        route = '/' + '/'.join(parts[:-1]) + '/'
    if any(seg in ('_global-error', 'not-found') for seg in parts):
        continue
    raw_routes.add(route)

canonical_aliases = [
    ('/proposal/', '/services/'),
    ('/ai/', '/tools/'),
    ('/free-ai-it-tools/', '/tools/'),
    ('/industry-solutions/', '/industries/'),
    ('/governments/', '/industries/'),
]

for route in sorted(raw_routes):
    sitemap_entries.append(f'  <url><loc>https://ziontechgroup.com{route}</loc><changefreq>weekly</changefreq><priority>0.6</priority></url>')

for alias, target in canonical_aliases:
    if alias not in raw_routes:
        sitemap_entries.append(f'  <url><loc>https://ziontechgroup.com{alias}</loc><changefreq>weekly</changefreq><priority>0.5</priority></url>')

write_sitemap(SITEMAP, sitemap_entries)
write_sitemap(REPO / 'public' / 'sitemap.xml', sitemap_entries)
write_sitemap(REPO / 'docs' / 'sitemap.xml', sitemap_entries)
print('Rewrote sitemap.xml, public/sitemap.xml, docs/sitemap.xml')

# Rewrite feed.xml
feed_entries = []
for slug in sorted(valid_slugs)[:50]:
    title = slug.replace('-', ' ').replace('/', ' ').strip()
    title = re.sub(r'\s+', ' ', title).title()
    feed_entries.append(f'<entry><title>{title}</title><link href="https://ziontechgroup.com/blog/{slug}/"/></entry>')

feed_text = '<?xml version="1.0" encoding="UTF-8"?>\n<feed xmlns="http://www.w3.org/2005/Atom">\n  <title>Zion Tech Group Blog</title>\n  <link href="https://ziontechgroup.com/blog/"/>\n  <updated>2026-08-17T07:41:05Z</updated>\n' + '\n'.join(feed_entries) + '\n</feed>\n'
FEED.write_text(feed_text, encoding='utf-8')
print('Rewrote feed.xml')

# Scan generated blog posts for broken internal links
broken_patterns = [
    '/services/ai-meeting-intelligence-minutes-and-actions/',
    '/services/ai-incident-response-and-oncall-automation/',
    '/services/devops-automation/',
    '/blog/ai-development-acceleration-2026-6632/',
    '/blog/chaos-engineering-2026-7085/',
    '/blog/autonomous-code-deployment-2026-6522/',
    '/blog/cybersecurity-platform-msp-2026-6627/',
    '/blog/managed-it-services-small-business-2026-7318/',
    '/blog/api-integration-2026-7151/',
    '/blog/ai-3d-asset-generator-2026-7132/',
    '/blog/devops-cicd-2026-7332/',
    '/blog/api-security-testing-2026-7313/',
]
fixed = 0
for page in BLOG_ROOT.glob('*/page.tsx'):
    text = page.read_text(encoding='utf-8')
    new = text
    for bad in broken_patterns:
        if bad in new:
            slug = bad.strip('/').split('/')[-1]
            base = re.sub(r'-\d+$', '', slug)
            if base in valid_slugs:
                replacement = f'/blog/{base}/'
            else:
                replacement = '/blog/'
            new = new.replace(bad, replacement)
            fixed += 1
    if new != text:
        page.write_text(new, encoding='utf-8')

print(f'Patched broken links in {fixed} files')
