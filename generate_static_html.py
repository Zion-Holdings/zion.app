#!/usr/bin/env python3
"""Generate static HTML for services in range [start, start+10)."""
import json
import os
import sys

BASE = '/Users/klebergarciaalcatrao/zion-support.github.io'
DATA_BASE = '/Users/klebergarciaalcatrao'
SERVICES_FILE = os.path.join(DATA_BASE, 'app', 'data', 'servicesData.json')
PUBLIC_SERVICES = os.path.join(BASE, 'public', 'services')
PROGRESS_FILE = os.path.join(BASE, 'outreach_monitor', 'processed', 'last_service_count.txt')

def html_escape(text):
    if not text:
        return ''
    return (text.replace('&', '&amp;').replace('<', '&lt;')
                .replace('>', '&gt;').replace('"', '&quot;'))

def format_price(val):
    if not val or val == 'N/A':
        return 'N/A'
    val_str = str(val)
    if val_str.startswith('$'):
        return val_str[1:]
    return val_str

def build_features_html(features):
    if not features:
        return '<li>No features listed</li>'
    items = []
    for f in features[:5]:
        items.append(f'<li>{html_escape(str(f))}</li>')
    return '\n'.join(items)

def build_benefits_html(benefits):
    if not benefits:
        return '<li>No benefits listed</li>'
    items = []
    for b in benefits[:5]:
        items.append(f'<li>{html_escape(str(b))}</li>')
    return '\n'.join(items)

def build_page_html(service):
    sid = service.get('id', 'unknown')
    name = service.get('name') or service.get('title', 'Service')
    desc = service.get('description', '')
    features = service.get('features', [])
    benefits = service.get('benefits', [])
    pricing = service.get('pricing', {})
    
    basic = format_price(pricing.get('basic', 'N/A'))
    pro = format_price(pricing.get('pro', 'N/A'))
    enterprise = format_price(pricing.get('enterprise', 'N/A'))
    
    safe_name = html_escape(name)
    safe_desc = html_escape(desc[:200])
    
    html = f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{safe_name} - Zion Tech Group</title>
<meta name="description" content="{safe_desc}">
<link rel="canonical" href="https://ziontechgroup.com/services/{sid}">
<meta name="robots" content="index, follow">
<meta property="og:title" content="{safe_name} - Zion Tech Group">
<meta property="og:description" content="{safe_desc}">
<meta property="og:type" content="website">
<meta property="og:url" content="https://ziontechgroup.com/services/{sid}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{safe_name} - Zion Tech Group">
<meta name="twitter:description" content="{safe_desc}">
<style>
body{{font-family:system-ui,-apple-system,sans-serif;background:#0b1220;color:#e6f0ff;max-width:800px;margin:0 auto;padding:48px 24px;line-height:1.65}}
h1{{font-size:2.2rem;margin-bottom:0.5rem;color:#fff;font-weight:800}}
.subtitle{{color:#94a3b8;font-size:1.1rem;margin-bottom:2rem}}
.card{{background:#1e293b;border-radius:12px;padding:24px;margin:1.5rem 0;border:1px solid #334155}}
.card h2{{font-size:1.5rem;margin-bottom:1rem;color:#a78bfa;font-weight:700}}
ul{{padding-left:1.5rem}}
li{{margin-bottom:0.5rem}}
.price-grid{{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-top:1rem}}
.price-box{{background:#0f172a;border-radius:8px;padding:16px;text-align:center;border:1px solid #334155}}
.price-box.pro{{border-color:#a78bfa}}
.price-box h3{{margin:0 0 0.5rem;font-size:1rem;color:#94a3b8}}
.price{{font-size:1.8rem;font-weight:800;color:#a78bfa}}
.booking-btn{{display:inline-block;background:#a78bfa;color:#0b1220;padding:14px 32px;border-radius:8px;text-decoration:none;font-weight:700;font-size:1.1rem}}
.booking-btn:hover{{background:#c4b5fd}}
.back-link{{color:#a78bfa;text-decoration:none;font-size:0.9rem}}
.back-link:hover{{text-decoration:underline}}
.footer{{margin-top:4rem;padding-top:1rem;border-top:1px solid #334155;font-size:0.85rem;color:#64748b;text-align:center}}
</style>
</head>
<body>
<h1>{safe_name}</h1>
<div class="subtitle">{safe_desc}</div>

<div class="card">
  <h2>Key Features</h2>
  <ul style="list-style:disc">
{build_features_html(features)}
  </ul>
</div>

<div class="card">
  <h2>Benefits</h2>
  <ul style="list-style:disc">
{build_benefits_html(benefits)}
  </ul>
</div>

<div class="card">
  <h2>Pricing Options</h2>
  <div class="price-grid">
    <div class="price-box">
      <h3>Basic</h3>
      <div class="price">${basic}/mo</div>
    </div>
    <div class="price-box pro">
      <h3>Pro</h3>
      <div class="price">${pro}/mo</div>
    </div>
    <div class="price-box">
      <h3>Enterprise</h3>
      <div class="price">${enterprise}/mo</div>
    </div>
  </div>
</div>

<div style="text-align:center;margin:3rem 0">
  <a href="https://calendly.com/kleber-ziontechgroup/consultation" target="_blank" rel="noopener noreferrer" class="booking-btn">
    Book a Consultation
  </a>
</div>

<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem">
  <a href="/services/" class="back-link">← All Services</a>
  <a href="/tools/" style="color:#64748b;text-decoration:none;font-size:0.9rem">Try our free tools →</a>
</div>

<div class="footer">
  <p>© 2026 Zion Tech Group. All rights reserved.</p>
  <p>Service ID: {sid}</p>
</div>

<script type="application/ld+json">
{{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "{safe_name}",
  "description": "{safe_desc}",
  "provider": {{
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com"
  }},
  "serviceUrl": "https://ziontechgroup.com/services/{sid}",
  "areaServed": "Global"
}}
</script>
</body>
</html>
'''
    return html

def main():
    if len(sys.argv) < 2:
        print('Usage: python3 generate_static_html.py <start_index>')
        sys.exit(1)
    
    start = int(sys.argv[1])
    
    with open(SERVICES_FILE, 'r') as f:
        data = json.load(f)
    
    if isinstance(data, dict):
        services = data.get('services', [])
    else:
        services = data
    
    end = start + 10
    batch = services[start:end]
    
    generated = 0
    skipped = 0
    for service in batch:
        sid = service.get('id', 'unknown-service')
        dir_path = os.path.join(PUBLIC_SERVICES, sid)
        html_path = os.path.join(dir_path, 'index.html')
        
        if os.path.exists(html_path):
            print(f'[⏭]  Already exists: {sid}')
            skipped += 1
            continue
        
        os.makedirs(dir_path, exist_ok=True)
        html = build_page_html(service)
        
        with open(html_path, 'w') as f:
            f.write(html)
        
        print(f'[📄] Generated static HTML: {sid}')
        generated += 1
    
    print(f'Generated: {generated} | Skipped: {skipped}')
    
    # Update progress only if we actually generated new pages
    if generated > 0:
        try:
            os.makedirs(os.path.dirname(PROGRESS_FILE), exist_ok=True)
            with open(PROGRESS_FILE, 'w') as f:
                f.write(str(end))
            print(f'Progress updated: {start} -> {end}')
        except IOError as e:
            print(f'WARNING: Could not update progress: {e}')

if __name__ == '__main__':
    main()
