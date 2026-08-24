#!/usr/bin/env python3
"""
Bulk static HTML generator for service pages.

The Next.js build with `output: 'export'` fails/OOMs when trying to pre-render
16,000+ service pages. The _dynamic route has `generateStaticParams` returning []
and `dynamicParams: false`, so dynamic service pages are never exported.

This script reads each service's page.tsx, extracts the service data (title,
description, features, benefits, pricing, FAQ), and generates standalone static
HTML files that match the site's design system. The output goes to out/services/
so it can be deployed to gh-pages.

Usage:
    python3 scripts/generate-static-service-pages.py
"""
import os
import re
import sys
import json
import html as html_lib
from pathlib import Path

BASE = Path('/Users/klebergarciaalcatrao/zion-support.github.io')
SERVICES_DIR = BASE / 'app' / 'services'
DATA_FILE = BASE / 'app' / 'data' / 'servicesData.json'
OUT_DIR = BASE / 'out' / 'services'

# --- Extract navigation and footer from an existing rendered page ---
EXISTING_HTML = BASE / 'out' / 'services' / 'accessibility-compliance' / 'index.html'

def load_template_assets():
    """Load nav, footer, and CSS from an existing rendered service page."""
    if not EXISTING_HTML.exists():
        print(f"ERROR: Template page not found: {EXISTING_HTML}")
        sys.exit(1)

    content = EXISTING_HTML.read_text()

    # Extract head CSS and JS assets
    head_match = re.search(r'<head>(.*?)</head>', content, re.DOTALL)
    head = head_match.group(1) if head_match else ''

    css_match = re.search(r'<link rel="stylesheet"[^>]+>', head)
    css_link = css_match.group(0) if css_match else '<link rel="stylesheet" href="/_next/static/css/35d3500d244153d5.css" data-precedence="next"/>'

    # Extract JS scripts (static ones, not inline)
    js_scripts = re.findall(r'<script[^>]*src="[^"]*"[^>]*/?>', head)

    # Extract navigation
    nav_match = re.search(r'<header[^>]*id="site-navigation".*?</header>', content, re.DOTALL)
    nav = nav_match.group(0) if nav_match else ''

    # Extract footer
    footer_match = re.search(r'<footer[^>]*>.*?</footer>', content, re.DOTALL)
    footer = footer_match.group(0) if footer_match else ''

    # Extract the skip link and wrapper
    skip_match = re.search(r'<a href="#main-content"[^>]*>.*?</a>', content)
    skip_link = skip_match.group(0) if skip_match else ''

    # Extract the opening body div structure
    body_match = re.search(r'<body[^>]*>', content)
    body_open = body_match.group(0) if body_match else '<body>'

    # Extract main wrapper
    main_match = re.search(r'<div hidden=""><!--\$--><!--\$--></div>', content)
    hidden_div = main_match.group(0) if main_match else '<div hidden><!--$--><!--/$--></div>'

    return {
        'css_link': css_link,
        'js_scripts': js_scripts,
        'nav': nav,
        'footer': footer,
        'skip_link': skip_link,
        'body_open': body_open,
        'hidden_div': hidden_div,
    }


def parse_page_tsx(content, slug):
    """Parse a service page.tsx file and extract structured data."""
    data = {
        'slug': slug,
        'title': slug.replace('-', ' ').title(),
        'description': 'AI/IT service by Zion Tech Group.',
        'canonical': f'https://ziontechgroup.com/services/{slug}',
        'name': 'Service Name',
        'service_type': 'ai',
        'features': [],
        'benefits': [],
        'pricing': [],
        'faq_questions': [],
        'email': 'hello@ziontechgroup.com',
    }

    # Extract from metadata
    title_match = re.search(r'title:\s*["\']([^"\']+)["\']', content)
    if title_match:
        title = title_match.group(1)
        # Clean title: remove " - Zion Tech Group" suffix
        title = re.sub(r'\s*[-|]\s*Zion Tech Group.*$', '', title).strip()
        data['title'] = title
        data['name'] = title

    desc_match = re.search(r'description:\s*["\']([^"\']+)["\']', content)
    if desc_match:
        data['description'] = desc_match.group(1)

    # Extract from JSON-LD (more reliable)
    name_match = re.search(r"'name':\s*'([^']+)'", content)
    if name_match:
        data['name'] = name_match.group(1)

    # Extract serviceType
    stype_match = re.search(r"'serviceType':\s*'([^']*)'", content)
    if stype_match:
        data['service_type'] = stype_match.group(1)

    # Extract pricing
    pricing_matches = list(re.finditer(r"'name':\s*'([^']+)'\s*,\s*'price':\s*'([^']*)'", content))
    if pricing_matches:
        for m in pricing_matches:
            data['pricing'].append((m.group(1), m.group(2)))

    # Extract features from <li> within Key Features section
    features_match = re.search(r'Key Features</h2>\s*<ul[^>]*>(.*?)</ul>', content, re.DOTALL)
    if features_match:
        features = re.findall(r'<li>(.*?)</li>', features_match.group(1), re.DOTALL)
        data['features'] = [re.sub(r'<[^>]+>', '', f).strip() for f in features]

    # Extract benefits from <li> within Benefits section
    benefits_match = re.search(r'Benefits</h2>\s*<ul[^>]*>(.*?)</ul>', content, re.DOTALL)
    if benefits_match:
        benefits = re.findall(r'<li>(.*?)</li>', benefits_match.group(1), re.DOTALL)
        data['benefits'] = [re.sub(r'<[^>]+>', '', b).strip() for b in benefits]

    # Extract FAQ questions (from JSON-LD FAQPage)
    faq_questions = re.findall(r"'name':\s*'([^']+)'\s*,\s*'acceptedAnswer'", content)
    if faq_questions:
        data['faq_questions'] = faq_questions

    # Also try to extract FAQ answers
    faq_answers = re.findall(r"'acceptedAnswer':\s*\{[^{}]*'text':\s*'([^']*)'", content, re.DOTALL)
    data['faq_pairs'] = list(zip(faq_questions[:len(faq_answers)], faq_answers)) if faq_answers else []

    # Extract email from contactInfo or JsonLd
    email_match = re.search(r"'email':\s*'([^']+)'", content)
    if email_match:
        data['email'] = email_match.group(1)

    # If no JSON-LD, try to extract features/benefits from the servicesData.json
    return data


def generate_html(data, assets):
    """Generate a complete standalone HTML page for a service."""
    title = html_lib.escape(data['title'])
    description = html_lib.escape(data['description'])
    canonical = html_lib.escape(f"https://ziontechgroup.com/services/{data['slug']}")
    slug = data['slug']

    # Generate features HTML
    if data['features']:
        features_html = ''.join(
            f'<li class="text-slate-300 mb-2">{html_lib.escape(f)}</li>' for f in data['features']
        )
    else:
        features_html = '<li class="text-slate-300 mb-2">Tailored automation</li><li class="text-slate-300 mb-2">Enterprise integration</li><li class="text-slate-300 mb-2">Measurable outcomes</li>'

    # Generate benefits HTML
    if data['benefits']:
        benefits_html = ''.join(
            f'<li class="text-slate-300 mb-2">{html_lib.escape(b)}</li>' for b in data['benefits']
        )
    else:
        benefits_html = '<li class="text-slate-300 mb-2">Reduce operational costs</li><li class="text-slate-300 mb-2">Improve efficiency</li><li class="text-slate-300 mb-2">Scale without complexity</li>'

    # Generate pricing HTML
    if data['pricing']:
        # Handle both tuple format (name, price) and dict format
        if isinstance(data['pricing'], dict):
            pricing_items = [(k.title(), v) for k, v in data['pricing'].items()]
        else:
            pricing_items = data['pricing']

        # Format price display
        def format_price(p):
            if isinstance(p, (int, float)):
                return f"${p}/mo"
            p_str = str(p)
            if '$' in p_str or '/' in p_str or p_str.startswith('R$'):
                return p_str
            try:
                num = float(p_str)
                return f"${num:,.0f}/mo"
            except (ValueError, TypeError):
                return p_str

        pricing_html = ''.join(
            f'<div class="bg-slate-800 p-4 rounded-lg{" border-2 border-purple-500" if i == 0 else ""}">\n'
            f'              <h3 class="font-semibold mb-2">{html_lib.escape(str(name))}</h3>\n'
            f'              <p class="text-2xl font-bold mb-2">{format_price(price)}</p>\n'
            f'            </div>' for i, (name, price) in enumerate(pricing_items)
        )
    else:
        pricing_html = '''<div class="bg-slate-800 p-4 rounded-lg"><h3 class="font-semibold mb-2">Basic</h3><p class="text-2xl font-bold mb-2">$299/mo</p></div>
<div class="bg-slate-800 p-4 rounded-lg border-2 border-purple-500"><h3 class="font-semibold mb-2">Pro</h3><p class="text-2xl font-bold mb-2">$799/mo</p></div>
<div class="bg-slate-800 p-4 rounded-lg"><h3 class="font-semibold mb-2">Enterprise</h3><p class="text-2xl font-bold mb-2">$2,499/mo</p></div>'''

    # Generate FAQ HTML
    if data.get('faq_pairs'):
        faq_html = ''.join(
            f'''<div class="bg-slate-900/40 border border-slate-800/60 rounded-xl p-3 mb-2">
              <h3 class="text-sm font-semibold text-white mb-1">{html_lib.escape(q)}</h3>
              <p class="text-xs text-slate-400">{html_lib.escape(a)}</p>
            </div>''' for q, a in data['faq_pairs']
        )
        faq_section = f'''<section class="mt-12">
            <h2 class="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div class="space-y-2">{faq_html}</div>
          </section>'''
    else:
        faq_section = ''

    # Service type badge
    stype = html_lib.escape(data.get('service_type', 'ai'))

    page = f'''<!DOCTYPE html><!--{html_lib.escape(data.get('build_id', 'static-gen'))}--><html lang="en"><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/>{assets['css_link']}<title>{title} - Zion Tech Group</title><meta name="description" content="{description}"/><link rel="canonical" href="{canonical}"/><meta property="og:title" content="{title}"/>
<meta property="og:description" content="{description}"/>
<meta property="og:url" content="{canonical}"/>
<meta property="og:site_name" content="Zion Tech Group"/>
<meta property="og:type" content="article"/>
<meta name="twitter:card" content="summary"/>
<meta name="twitter:title" content="{title}"/>
<meta name="twitter:description" content="{description}"/>
<script src="/_next/static/chunks/polyfills-42372ed130431b0a.js" noModule=""></script></head>
<body class="bg-slate-950 text-white min-h-screen">{assets['hidden_div']}<a href="#main-content" class="skip-to-content" style="position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden">Skip to content</a><div class="min-h-screen flex flex-col">{assets['nav']}
<main id="main-content" class="flex-1 relative z-10">
<div class="container-page py-12 px-4">
<div class="text-center max-w-4xl mx-auto mb-12">
<h1 class="text-4xl md:text-5xl font-bold mb-4 text-white">{html_lib.escape(data['name'])}</h1>
<p class="text-lg text-slate-300 mb-6 max-w-2xl mx-auto">{description}</p>
<span class="inline-block px-3 py-1 bg-slate-800 rounded-full text-sm text-purple-400">{stype}</span>
</div>

<div class="max-w-4xl mx-auto">
<div class="bg-slate-900 rounded-xl p-6 mb-8">
<h2 class="text-2xl font-semibold mb-4">Key Features</h2>
<ul class="list-disc list-inside space-y-2">
{features_html}
</ul>
</div>

<div class="bg-slate-900 rounded-xl p-6 mb-8">
<h2 class="text-2xl font-semibold mb-4">Benefits</h2>
<ul class="list-disc list-inside space-y-2">
{benefits_html}
</ul>
</div>

<div class="border border-purple-500 rounded-xl p-6 mb-8">
<h2 class="text-2xl font-semibold mb-4">Pricing</h2>
<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
{pricing_html}
</div>
</div>

{faq_section}

<div class="border-t border-slate-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
<a href="/services/" class="text-purple-300 hover:text-purple-200">← Back to All Services</a>
<a href="/tools/" class="text-slate-400 hover:text-slate-300">Try our free tools →</a>
</div>

<div class="text-center mt-8">
<a href="https://calendly.com/kleber-ziontechgroup/consultation" target="_blank" rel="noopener noreferrer" class="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors">
Book a Consultation
</a>
</div>
</div>
</div>
</main>{assets['footer']}
</div></body></html>'''

    return page


def main():
    print("Loading template assets...")
    assets = load_template_assets()
    print(f"  CSS: {assets['css_link'][:60]}...")
    print(f"  Nav: {len(assets['nav'])} chars")
    print(f"  Footer: {len(assets['footer'])} chars")
    print(f"  JS scripts: {len(assets['js_scripts'])}")

    # Load services data for fallback data
    services_data = []
    if DATA_FILE.exists():
        services_data = json.loads(DATA_FILE.read_text())
        print(f"  Loaded servicesData.json: {len(services_data)} services")
    else:
        print(f"  WARNING: servicesData.json not found")

    # Build a lookup by slug
    services_by_slug = {}
    for s in services_data:
        # Try href, then id
        slug = s.get('href', '').replace('/services/', '').rstrip('/')
        if not slug:
            slug = s.get('id', '')
        if slug:
            services_by_slug[slug] = s

    # Count service page.tsx files
    service_dirs = [d for d in os.listdir(SERVICES_DIR) if not d.startswith('_') and os.path.isdir(os.path.join(SERVICES_DIR, d))]
    print(f"\nFound {len(service_dirs)} service directories")

    # Clean existing out/services directory
    import shutil
    if OUT_DIR.exists():
        print(f"  Cleaning existing {OUT_DIR}...")
        shutil.rmtree(OUT_DIR)
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    generated = 0
    errors = 0
    batch_size = 1000

    for i, slug in enumerate(sorted(service_dirs)):
        page_path = SERVICES_DIR / slug / 'page.tsx'
        if not page_path.exists():
            continue

        try:
            content = page_path.read_text()
            data = parse_page_tsx(content, slug)

            # If features/benefits are empty, try to get from servicesData.json
            if not data['features'] or not data['benefits']:
                svc = services_by_slug.get(slug)
                if svc:
                    if not data['features'] and svc.get('features'):
                        data['features'] = svc['features'] if isinstance(svc['features'], list) else []
                    if not data['benefits'] and svc.get('benefits'):
                        data['benefits'] = svc['benefits'] if isinstance(svc['benefits'], list) else []
                    if not data['pricing'] and svc.get('pricing'):
                        data['pricing'] = [(k, str(v)) for k, v in svc['pricing'].items()] if isinstance(svc.get('pricing'), dict) else []
                    if not data['description']:
                        data['description'] = svc.get('description', data['description'])
                    if not data['name'] or data['name'] == slug.replace('-', ' ').title():
                        data['name'] = svc.get('name', data['name'])
                    if not data['title'] or data['title'] == slug.replace('-', ' ').title():
                        data['title'] = svc.get('title', data['title'])
                    data['service_type'] = svc.get('category', data.get('service_type', 'ai'))

            html_content = generate_html(data, assets)

            out_path = OUT_DIR / slug / 'index.html'
            out_path.parent.mkdir(parents=True, exist_ok=True)
            out_path.write_text(html_content)

            # Also write a plain text version for SEO crawlers
            txt_path = OUT_DIR / slug / 'index.txt'
            txt_content = f"{data['name']}\n\n{data['description']}\n\n"
            if data['features']:
                txt_content += "Features:\n" + "\n".join(f"  - {f}" for f in data['features']) + "\n\n"
            if data['benefits']:
                txt_content += "Benefits:\n" + "\n".join(f"  - {b}" for b in data['benefits']) + "\n\n"
            if data['pricing']:
                pricing_items = [(k.title(), v) for k, v in data['pricing'].items()] if isinstance(data['pricing'], dict) else data['pricing']
                txt_content += "Pricing:\n" + "\n".join(f"  - {n}: {p}" for n, p in pricing_items) + "\n"
            txt_path.write_text(txt_content)

            generated += 1

            if (i + 1) % batch_size == 0:
                print(f"  Progress: {i+1}/{len(service_dirs)} processed, {generated} generated")

        except Exception as e:
            errors += 1
            if errors <= 5:
                print(f"  ERROR for {slug}: {e}")

    print(f"\n=== Results ===")
    print(f"  Processed: {len(service_dirs)}")
    print(f"  Generated: {generated}")
    print(f"  Errors: {errors}")


if __name__ == '__main__':
    main()
