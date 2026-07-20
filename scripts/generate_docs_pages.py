#!/usr/bin/env python3
"""Generate static docs/service pages + sitemap.xml from servicesData.json."""
import json
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
JSON_PATH = REPO / 'app' / 'data' / 'servicesData.json'
DOCS_SERVICES = REPO / 'docs' / 'services'
DOCS_SITEMAP = REPO / 'docs' / 'sitemap.xml'


def clean(text: str) -> str:
    return text.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;').replace('"', '&quot;')


def service_html(service: dict) -> str:
    title = clean(service.get('title') or service.get('id') or 'Service')
    description = clean(service.get('description') or '')
    features = service.get('features') or []
    benefits = service.get('benefits') or []
    pricing = service.get('pricing') or {}
    if isinstance(pricing, str):
        # tolerate stringified dicts like '{ basic: "$49/mo" }'
        try:
            import ast
            parsed = ast.literal_eval(pricing.replace('“','"').replace('”','"'))
            if isinstance(parsed, dict):
                pricing = {str(k): v for k, v in parsed.items()}
            else:
                pricing = {'pricing': str(parsed)}
        except Exception:
            pricing = {'pricing': pricing}
    if not isinstance(pricing, dict):
        pricing = {'pricing': str(pricing)}
    contact = service.get('contactInfo') or {}
    if isinstance(contact, str):
        try:
            import ast
            parsed = ast.literal_eval(contact.replace('“','"').replace('”','"'))
            contact = {str(k): v for k, v in parsed.items()} if isinstance(parsed, dict) else {'contact': str(parsed)}
        except Exception:
            contact = {'contact': str(contact)}
    if not isinstance(contact, dict):
        contact = {'contact': str(contact)}
    category = clean(service.get('category') or '')
    href = clean(service.get('href') or f"/services/{service.get('id','')}/")
    canonical = f"https://ziontechgroup.com{href}"

    features_html = ''.join(f'<li>{clean(str(f))}</li>' for f in features)
    benefits_html = ''.join(f'<li>{clean(str(b))}</li>' for b in benefits)
    pricing_items = []
    for plan, value in pricing.items():
        pricing_items.append(f'<li><strong>{clean(plan)}</strong>: {clean(str(value))}</li>')
    pricing_html = ''.join(pricing_items)
    contact_lines = ''.join(f'<li>{clean(str(v))}</li>' for v in contact.values())
    contact_html = contact_lines or '<li>Contact us for details.</li>'

    return f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>{title} | Zion Tech Group</title>
  <meta name="robots" content="index, follow" />
  <meta name="description" content="{description}" />
  <link rel="canonical" href="{canonical}" />
  <style>
    :root {{ font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; }}
    * {{ box-sizing: border-box; }}
    body {{ margin: 0; padding: 0; color: #0f172a; background: #ffffff; }}
    header {{ border-bottom: 1px solid #e5e7eb; }}
    .container {{ max-width: 1100px; margin: 0 auto; padding: 24px; }}
    nav {{ display: flex; gap: 16px; flex-wrap: wrap; align-items: center; justify-content: space-between; }}
    .brand {{ font-weight: 700; letter-spacing: -0.02em; font-size: 18px; }}
    .links a {{ margin-left: 14px; color: #2563eb; text-decoration: none; font-weight: 500; }}
    .links a:hover {{ text-decoration: underline; }}
    h1 {{ font-size: clamp(26px, 3.4vw, 40px); line-height: 1.1; margin: 0 0 10px; letter-spacing: -0.03em; }}
    .lead {{ font-size: 17px; color: #334155; max-width: 740px; }}
    .section {{ padding: 22px 0; }}
    .section-title {{ font-size: 20px; margin: 0 0 10px; }}
    .grid {{ display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 14px; padding: 18px 0; }}
    .card {{ border: 1px solid #e5e7eb; border-radius: 12px; padding: 16px; }}
    .card h3 {{ margin: 0 0 6px; font-size: 15px; color: #0f172a; }}
    .card p {{ margin: 0; color: #334155; font-size: 14px; }}
    ul {{ padding-left: 18px; }}
    footer {{ border-top: 1px solid #e5e7eb; padding: 22px 24px; color: #475569; font-size: 13px; }}
    .cta-row {{ margin-top: 18px; display: flex; gap: 12px; flex-wrap: wrap; }}
    .btn {{ display: inline-block; padding: 12px 16px; border-radius: 10px; background: #0f172a; color: #fff; text-decoration: none; font-weight: 600; }}
    .btn.secondary {{ background: #ffffff; color: #0f172a; border: 1px solid #e5e7eb; }}
  </style>
</head>
<body>
  <header>
    <div class="container">
      <nav>
        <div class="brand">Zion Tech Group</div>
        <div class="links">
          <a href="/services/">Services</a>
          <a href="/solutions/">Solutions</a>
          <a href="/pricing/">Pricing</a>
          <a href="/contact/">Contact</a>
        </div>
      </nav>
    </div>
  </header>
  <main>
    <section class="section">
      <div class="container">
        <h1>{title}</h1>
        <p class="lead">{description}</p>
        <div class="cta-row">
          <a class="btn" href="/contact/">Start a project</a>
          <a class="btn secondary" href="/pricing/">See pricing</a>
        </div>
      </div>
    </section>
    <section class="section" style="background:#f8fafc">
      <div class="container">
        <h2 class="section-title">What we deliver</h2>
        <div class="grid">
          <div class="card">
            <h3>Capabilities</h3>
            <ul>{features_html}</ul>
          </div>
          <div class="card">
            <h3>Business value</h3>
            <ul>{benefits_html}</ul>
          </div>
          <div class="card">
            <h3>Pricing model</h3>
            <ul>{pricing_html}</ul>
          </div>
          <div class="card">
            <h3>Contact options</h3>
            <ul>{contact_html}</ul>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h2 class="section-title">Related services</h2>
        <p class="lead">Browse more services in the same area.</p>
        <div class="cta-row">
          <a class="btn secondary" href="/services/">All services</a>
          <a class="btn secondary" href="/solutions/">Solutions</a>
        </div>
      </div>
    </section>
  </main>
  <footer>
    <div class="container">© <span id="year"></span> Zion Tech Group · <a href="/">ziontechgroup.com</a></div>
  </footer>
  <script>document.getElementById('year').textContent = new Date().getUTCFullYear();</script>
</body>
</html>
"""


def main() -> None:
    data = json.loads(JSON_PATH.read_text())
    print(f'Loaded {len(data)} services')

    DOCS_SERVICES.mkdir(parents=True, exist_ok=True)

    sitemap_entries = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
    ]

    base_urls = [
        'https://ziontechgroup.com/',
        'https://ziontechgroup.com/services/',
        'https://ziontechgroup.com/solutions/',
        'https://ziontechgroup.com/pricing/',
        'https://ziontechgroup.com/contact/',
        'https://ziontechgroup.com/tools/',
        'https://ziontechgroup.com/about/',
        'https://ziontechgroup.com/blog/',
        'https://ziontechgroup.com/careers/',
        'https://ziontechgroup.com/partners/',
    ]
    for url in base_urls:
        sitemap_entries.append(f'  <url><loc>{url}</loc><changefreq>weekly</changefreq><priority>0.5</priority></url>')

    seen = set()
    errors = []
    for service in data:
        sid = clean(service.get('id') or '')
        if not sid or sid in seen:
            continue
        seen.add(sid)
        href = service.get('href') or f"/services/{sid}/"
        loc = f"https://ziontechgroup.com{href}"
        sitemap_entries.append(f'  <url><loc>{loc}</loc><changefreq>weekly</changefreq><priority>0.6</priority></url>')
        try:
            target = DOCS_SERVICES / sid / 'index.html'
            target.parent.mkdir(parents=True, exist_ok=True)
            target.write_text(service_html(service), encoding='utf-8')
        except Exception as e:
            errors.append(f'{sid}: {e}')

    sitemap_entries.append('</urlset>')
    DOCS_SITEMAP.write_text('\n'.join(sitemap_entries), encoding='utf-8')

    print(f'Generated {len(seen)} service pages')
    print(f'Updated sitemap URLs: {len(seen) + len(base_urls)}')
    if errors:
        print('Errors:')
        for e in errors[:50]:
            print(' -', e)
    else:
        print('No errors')


if __name__ == '__main__':
    main()
