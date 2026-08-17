#!/usr/bin/env python3
"""
Migrate all non-templated pages in app/ to use standard templates.

Strategies:
  - service-detail (features/benefits/pricing): wrap existing inner content inside
    SimplePageTemplate with layout="serviceDetail". The hero (h1+desc) is rendered
    by the template; existing features/benefits/pricing sections flow as children.
  - simple-centered (title + desc + CTA): wrap existing inner content inside
    SimplePageTemplate with layout="hero".
  - redirect, tool, portal, blog, already-templated: skip.

Usage: python3 scripts/migrate-pages-to-standard-templates.py [--dry-run]
"""
import os
import re
import sys
import json
import html as html_lib

BASE_DIR = os.environ.get("ZION_BASE_DIR", os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
APP_DIR = os.path.join(BASE_DIR, "app")
DRY_RUN = "--dry-run" in sys.argv


def extract_metadata_raw(content):
    """Extract the raw metadata object text from the page."""
    m = re.search(r'export\s+const\s+metadata\s*[:\=]\s*(\{[\s\S]*?\})\s*;', content)
    if m:
        return m.group(1)
    return None


def extract_title_from_h1(content):
    m = re.search(r'<h1[^>]*>(.*?)</h1>', content, re.DOTALL)
    if m:
        text = re.sub(r'<[^>]+>', '', m.group(1)).strip()
        text = html_lib.unescape(text)
        text = re.sub(r'^\s*[^\w\s]{1,3}\s*', '', text).strip()
        return text
    return None


def extract_title_from_metadata(content):
    m = re.search(r"title:\s*['\"]([^'\"]+)['\"]", content)
    if m:
        title = m.group(1).strip()
        title = re.sub(r'\s*\|\s*Zion Tech Group', '', title)
        title = re.sub(r'\s*-\s*Zion Tech Group', '', title)
        return title
    return None


def extract_description(content, title):
    """Extract the description paragraph — prefer the one right after h1."""
    # Pattern: </h1> followed by <p>
    m = re.search(r'</h1>\s*<p[^>]*>(.*?)</p>', content, re.DOTALL)
    if m:
        text = html_lib.unescape(re.sub(r'<[^>]+>', '', m.group(1)).strip())
        if text and len(text) > 10:
            return text
    # Fallback: look for text-slate-300/400 or text-gray-300/400 paragraphs
    for cls in ['text-slate-300', 'text-slate-400', 'text-gray-300', 'text-gray-400', 'text-lg text-slate-400']:
        m = re.search(r'className="[^"]*' + re.escape(cls) + r'[^"]*">\s*(.*?)</p>', content, re.DOTALL)
        if m:
            text = html_lib.unescape(re.sub(r'<[^>]+>', '', m.group(1)).strip())
            if text and len(text) > 10:
                return text
    return f"{title} — Zion Tech Group enterprise AI and IT solutions."


def extract_category(content):
    m = re.search(r'text-(green|red|blue|teal|sky|purple|amber|orange|cyan|yellow|pink|indigo|emerald|fuchsia)-400[^>]*>([^<]+)<', content)
    if m:
        val = html_lib.unescape(m.group(2).strip())
        # Filter out template literal artifacts
        if val and '${' not in val and len(val) < 50:
            return val
    return None


def extract_emoji(content):
    m = re.search(r'(💡|⚙️|🤖|☁️|🔐|📊|🚀|📡|📧|🛡️|📈|🧠|🖥️|📱|🔒|📋|🎯|⚡|💰|📦|🏗️)', content)
    if m:
        return m.group(1)
    return None


def extract_inner_content(content):
    """Extract inner JSX from <main>...</main>, strip hero elements (h1, desc, badge)."""
    m = re.search(r'<main[^>]*>([\s\S]*?)</main>', content, re.DOTALL)
    if not m:
        return ""
    inner = m.group(1).strip()

    # Remove outer div wrapper (common pattern: <div className="max-w-4xl mx-auto...">...</div>)
    div_match = re.match(r'^<div[^>]*>\s*(.*?)\s*</div>\s*$', inner, re.DOTALL)
    if div_match:
        inner = div_match.group(1).strip()

    # Strip hero elements: h1 + following description paragraph + category badge span
    # Pattern: optional badge span → h1 → p (description) → optional badge div
    # We remove everything up to and including the description paragraph

    h1_match = re.search(r'<h1[^>]*>.*?</h1>', inner, re.DOTALL)
    if h1_match:
        # Everything before h1 (could be a badge span)
        before = inner[:h1_match.start()]
        after = inner[h1_match.end():]

        # Strip the description paragraph right after </h1>
        p_match = re.match(r'\s*<p[^>]*>.*?</p>\s*', after, re.DOTALL)
        if p_match:
            after = after[p_match.end():]

        # Strip category badge span/div right after description
        badge_match = re.match(r'\s*<(span|div)[^>]*>.*?</\1>\s*', after, re.DOTALL)
        if badge_match:
            after = after[badge_match.end():]

        inner = before.strip() + "\n" + after.strip()

    # Remove standalone category badge at the very start
    inner = re.sub(r'^\s*<(span|div)[^>]*className="[^"]*text-xs[^"]*"[^>]*>.*?</\1>\s*', '', inner, count=1, flags=re.DOTALL)
    inner = inner.strip()

    return inner


def build_metadata(title, description, rel_path, existing_meta=None):
    path = rel_path.replace('/page.tsx', '')
    if existing_meta:
        return existing_meta
    safe_desc = description.replace("'", "\\'").replace('\n', ' ').strip()
    safe_title = title.replace("'", "\\'")
    return f"""{{
  title: '{safe_title}',
  description: '{safe_desc}',
  alternates: {{ canonical: 'https://ziontechgroup.com/{path}/' }}
}}"""


def categorize_page(rel_path, content):
    if 'PageTemplate' in content or 'ServicePageTemplate' in content or 'SimplePageTemplate' in content:
        return 'already_templated'
    if 'window.location.replace' in content or 'http-equiv' in content.lower() or 'httpEquiv' in content:
        return 'redirect'
    if '/tools/' in rel_path or '/portal/' in rel_path or '/blog/' in rel_path:
        return 'skip'
    if '/ai-labs/' in rel_path or '/ai-lab/' in rel_path:
        return 'skip'
    if '/academy/' in rel_path:
        return 'skip'

    has_pricing = bool(re.search(r'Pricing|pricing', content))
    has_features = bool(re.search(r'Key Features|Features', content))
    has_benefits = bool(re.search(r'Benefits', content))

    if has_features or has_benefits or has_pricing:
        return 'service_detail'
    return 'simple'


def migrate_page(content, filepath, rel_path, category):
    title = extract_title_from_h1(content) or extract_title_from_metadata(content) or "Service"
    description = extract_description(content, title)
    category_label = extract_category(content) or 'AI Service'
    icon = extract_emoji(content)
    existing_meta = extract_metadata_raw(content)
    meta_block = build_metadata(title, description, rel_path, existing_meta)
    inner_content = extract_inner_content(content)

    parts = [
        f'title: {json.dumps(title)}',
        f'description: {json.dumps(description)}',
    ]
    if category_label and '${' not in category_label:
        parts.append(f'category: {json.dumps(category_label)}')
    if icon:
        parts.append(f'heroIcon: {json.dumps(icon)}')

    if category == 'service_detail':
        parts.append("ctaLabel: 'Book a Free Consultation'")
        parts.append("ctaHref: 'https://calendly.com/kleber-ziontechgroup'")
    else:
        parts.append("ctaLabel: 'Get Started'")
        parts.append("ctaHref: '/contact'")
        parts.append("secondaryCtaLabel: 'View All Services'")
        parts.append("secondaryCtaHref: '/services'")

    data_str = '{\n  ' + ',\n  '.join(parts) + '\n}'
    safe_inner = inner_content.replace('`', '\\`').replace('${', '\\${')
    template_name = "ServicePageTemplate" if category == 'service_detail' else "SimplePageTemplate"

    return f"""import type {{ Metadata }} from 'next';
import {template_name} from '@/components/{template_name}';

export const metadata: Metadata = {meta_block};

const pageData = {data_str};

export default function Page() {{
  return (
    <{template_name} data={{...pageData}}>
      <div className="container-page py-12">
        {safe_inner}
      </div>
    </{template_name}>
  );
}}
"""


def main():
    pages = []
    for root, dirs, files in os.walk(APP_DIR):
        dirs[:] = [d for d in dirs if not d.startswith('.') and d not in ('node_modules', '__pycache__')]
        if "page.tsx" in files:
            pages.append(os.path.join(root, "page.tsx"))

    print(f"Total page.tsx files: {len(pages)}")

    counts = {}
    migrated = 0
    sample_errors = []
    sample_outputs = []

    for fp in pages:
        rel = os.path.relpath(fp, APP_DIR)
        try:
            with open(fp, "r", errors="replace") as f:
                content = f.read()
        except:
            counts['error'] = counts.get('error', 0) + 1
            continue

        cat = categorize_page(rel, content)
        counts[cat] = counts.get(cat, 0) + 1

        if cat in ('already_templated', 'redirect', 'skip'):
            continue

        try:
            new_content = migrate_page(content, fp, rel, cat)
            if DRY_RUN and len(sample_outputs) < 3:
                sample_outputs.append((rel, cat, new_content[:500]))
            if not DRY_RUN:
                with open(fp, "w") as f:
                    f.write(new_content)
            migrated += 1
        except Exception as e:
            counts['error'] = counts.get('error', 0) + 1
            if len(sample_errors) < 5:
                sample_errors.append((rel, str(e)))

    print(f"\nResults (DRY_RUN={DRY_RUN}):")
    for k in sorted(counts.keys()):
        if k != 'cat':
            print(f"  {counts[k]:8d}  {k}")
    print(f"\nMigrated: {migrated}")

    if sample_outputs:
        print("\n=== Sample outputs ===")
        for rel, cat, output in sample_outputs:
            print(f"\n--- {rel} ({cat}) ---")
            print(output)

    if sample_errors:
        print("\nSample errors:")
        for rel, err in sample_errors:
            print(f"  {rel}: {err}")


if __name__ == "__main__":
    main()
